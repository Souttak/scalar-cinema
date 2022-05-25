const paginateResults = (results, params) => {
  return new Promise((resolve, reject) => {
    const { page, limit } = params;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const temp = {
      status: 'success',
      data: [],
      pagination: {},
    };

    temp.data = results.slice(startIndex, endIndex);

    if (endIndex < results.length) {
      temp.pagination.next = {
        page: page + 1,
        limit: limit,
      };
    } else {
      temp.pagination.next = null;
    }

    if (startIndex > 0) {
      temp.pagination.previous = {
        page: page - 1,
        limit: limit,
      };
    } else {
      temp.pagination.previous = null;
    }

    resolve(temp);
  });
};

module.exports = paginateResults;
