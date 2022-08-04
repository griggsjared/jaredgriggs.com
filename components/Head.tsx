import { FC } from "react"
import NextHead from 'next/head'

interface Props {
  title: string,
  description?: string
}

const Head : FC<Props> = (props: Props)  => {
  return (
    <NextHead>
      <title>{props.title}</title>
      { props.description &&
        <meta name="description" content={props.description} />
      }
      <link rel="icon" href="/favicon.ico" />
      <html className='w-full h-full'></html>
      <body className='flex w-full h-full bg-gray-500' />
    </NextHead>
  )
}

export { Head }
