import Sails from 'sails/lib/app'

let app = Sails();
let config = {
    environment: 'test',
};

before(function(done) {
    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(15000);

    app.lift(config, function(err, server) {
        if (err) return done(err);
        // here you can load fixtures, etc.
        done(err, sails);
    });
});

after(function(done) {
    // here you can clear fixtures, etc.
    app.lower(done);
});
