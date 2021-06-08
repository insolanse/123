import bs from 'Browser-sync'

export const Serve = (done) => {
bs.init({
    server: {
    baseDir: './'
    index: '/index.html'
    }
})
done();
};