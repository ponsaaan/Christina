/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  home: {

  },
  posts: {
    first_post: {
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/first-post' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  favicon_ico: '/favicon.ico',
  vercel_svg: '/vercel.svg'
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
