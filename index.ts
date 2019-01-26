import {FeedItem, FeedParser, FeedSource} from '../index.d';

const t3n: FeedParser = {
    name: 't3n News',
    urls: [{url: 'http://feeds2.feedburner.com/aktuell/feeds/rss/'}],
    parse: (feed: any): FeedSource => {
        const items: Array<FeedItem> = [];
        feed.items.forEach((item: any) => {
            items.push({
                title: item.title,
                description: item.contentSnippet,
                link: item.link,
                categories: item.categories,
                date: item.isoDate
            });
        });
        return {
            name: feed.title,
            description: feed.description,
            language: feed.language.split('-')[0],
            link: feed.link,
            feed: items
        };
    }
};

export default t3n;