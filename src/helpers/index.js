import * as R from 'ramda';

export function usePageContent(content) {
    return R.reduce(
        (acc, item) => R.mergeRight(
            acc,
            R.pipe(
                R.prop('fields'),
                R.converge(R.pair, [
                    R.pipe(
                        R.prop('section'),
                        R.toLower,
                    ),
                    R.omit([
                        'section',
                    ])
                ]),
                R.of,
                R.fromPairs,
            )(item),
        ),
        {},
        content,
    );
}

export function useHero(hero) {
    return R.applySpec({
        title: R.prop('title'),
        body: R.prop('body'),
        image: R.path(['image', 'fields', 'file', 'url']),
    })(hero);
}
export function useBio(bio) {
    return R.applySpec({
        title: R.prop('title'),
        body: R.prop('body'),
        image: R.path(['image', 'fields', 'file', 'url']),
    })(bio);
}

export function useCourses(courses) {
    return R.applySpec({
        title: R.prop('title'),
        courses: R.pipe(
            R.prop('multidata'),
            R.map(R.applySpec({
                id: R.path(['sys', 'id']),
                title: R.path(['fields', 'title']),
                subtitle: R.path(['fields', 'subtitle']),
                description: R.path(['fields', 'description']),
                link: R.path(['fields', 'link']),
                tags: R.path(['fields', 'tags']),
                poster: R.path(['fields', 'poster', 'fields', 'file', 'url']),
            })),
        )
    })(courses);
}

export function useYouTubeList(youtube) {
    return R.applySpec({
        title: R.prop('title'),
        list: R.pipe(
            R.prop('multidata'),
            R.map(R.applySpec({
                id: R.path(['sys', 'id']),
                title: R.path(['fields', 'title']),
                link: R.path(['fields', 'link']),
                poster: R.path(['fields', 'poster', 'fields', 'file', 'url']),
            })),
        )
    })(youtube);
}

export function useReview(reviewSection) {
    return R.applySpec({
        title: R.prop('title'),
        list: R.pipe(
            R.prop('multidata'),
            R.map(
                R.path(['fields', 'facebookId'])
            ),
        ),
    })(reviewSection);
}

export function usePartners(partnersSection) {
    return R.applySpec({
        title: R.prop('title'),
        list: R.pipe(
            R.prop('multidata'),
            R.map(
                R.applySpec({
                    id: R.path(['sys', 'id']),
                    image: R.path(['fields', 'poster', 'fields', 'file', 'url']),
                    title: R.path(['fields', 'title']),
                })
            )
        ),
    })(partnersSection);
}