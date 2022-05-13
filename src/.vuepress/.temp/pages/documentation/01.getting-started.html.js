export const data = {
  "key": "v-52cd8a00",
  "path": "/documentation/01.getting-started.html",
  "title": "Getting started",
  "lang": "en-GB",
  "frontmatter": {
    "title": "Getting started"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1650634076000,
    "contributors": [
      {
        "name": "Edie Lemoine",
        "email": "edie@myparcel.nl",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "documentation/01.getting-started.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
