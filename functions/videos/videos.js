const { youtube_v3 } = require('googleapis');

const { YOUTUBE_API_KEY } = process.env;

const cache = {
  lastFetch: 0,
  counter: 0,
  videosItems: [],
};

const fetchVideos = async ({
  channelId,
}) => {
  const youtube = new youtube_v3.Youtube();
  const results = await youtube.search.list({
    channelId,
    maxResults: 25,
    part: 'id,snippet',
    auth: YOUTUBE_API_KEY,
  });

  cache.lastFetch = Date.now();
  cache.counter = 0;

  cache.videosItems = results.data.items
    .map(({
      id: {
        videoId,
      },
      snippet: {
        title,
        channelTitle,
        description,
        publishedAt,
        thumbnails: {
          default: {
            url: imageUrl,
          },
        },
      },
    }) => ({
      id: videoId,
      title,
      channelTitle,
      description,
      publishedAt,
      imageUrl,
    }))
    .filter(({ id }) => !!id);
}

exports.handler = async (event) => {
  const { channelId } = event.queryStringParameters;

  try {
    const shouldFetch = Date.now() - cache.lastFetch > 21600000;
    if (shouldFetch) {
      await fetchVideos({
        channelId,
      });
    }

    cache.counter = cache.counter + 1;

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(cache.videosItems),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
