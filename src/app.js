
function App() {
    this.getWelcomeMessage = function () {
        return 'karma unexpected library adapter';
    };
}

document.addEventListener("DOMContentLoaded", function () {
    var app = new App();
    document.getElementById('heading').innerHTML = app.getWelcomeMessage();
});
