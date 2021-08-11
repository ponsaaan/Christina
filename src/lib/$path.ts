/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  _DS_Store: {
    $url: (url?: { hash?: string }) => ({ pathname: '/.DS_Store' as const, hash: url?.hash })
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
  _DS_Store: '/.DS_Store',
  favicon_ico: '/favicon.ico',
  samlepp_ico: '/samlepp.ico',
  samplepp_ico: '/samplepp.ico',
  vercel_svg: '/vercel.svg'
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
