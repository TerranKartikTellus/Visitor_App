const myHandler = (client) => (req, res) => {


  client.get('visits', (err, visits) => {
    if (err) {
      console.error('Error retrieving visits count:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const numVisits = parseInt(visits) || 0;
    res.send(`Visitor ID: , Number of visits: ${numVisits}`);

    // Increment the visits count and store it in Redis
    client.set('visits', numVisits + 1, (err) => {
      if (err) {
        console.error('Error incrementing visits count:', err);
      }
    });
  });
};

module.exports = myHandler;
