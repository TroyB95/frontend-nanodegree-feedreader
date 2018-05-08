/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         // Checks that the url is defined and the string is longer than 0 characters

         it('url is defined', function() {
            allFeeds.forEach(function (arr) {
                var x = arr.url
                expect(x).toBeDefined();
                expect(x.length).toBeGreaterThan(0);
            });
         });




        // Checks that the name is defined and the string is longer than 0 characters

         it('name is defined', function() {
            allFeeds.forEach(function (arr) {
                var x = arr.name
                expect(x).toBeDefined();
                expect(x.length).toBeGreaterThan(0);
            });
         });
    });


    describe('The menu', function() {


        // Looks for menu-hidden as a class on the body element.

        it("should have a hide class", function() {
            expect(document.body.classList).toContain('menu-hidden');
    })


         /* Triggers the click function on the menu button then checks the class has been removed  
         Then clicks again and checks its been added once again */


        it('should change visibility when the menu icon is clicked', function() {

            $('.menu-icon-link').trigger('click');

            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');

            expect($('body').hasClass('menu-hidden')).toBe(true);
        


         });
        });
        

        
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {


        

        beforeEach(function(done) {
            loadFeed(0, done);
        })

        it('entry element in feed container should be present', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        })
    }); 

     

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
        




        var oldResult;

        beforeEach(function(done) {
            loadFeed(0, function() {
                // store the old feed result
                oldResult = $('.feed').html();
                // get the new feed result
                loadFeed(1, done);
            });
        });

        it('is different from the old', function() {
            expect($('.feed').html()).not.toBe(oldResult);
        });
});

        
}());

