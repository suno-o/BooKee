import type { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import HomeLayout from '@/components/Layout/HomeLayout'
import ArticleView from '@/views/Article'

export interface Article {
  title: string;
  img_url: string;
  content: string;
  created: string;
}

/* Article page */
export default function Article(props: {article: Article}) {
  return <ArticleView {...props} />
}

/* Article page layout */
Article.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>{page}</HomeLayout>
  )
}

/**
 * generate static pages on build time
 * 
 * For now: it will fetch articles from my local node server on build time
 * Later: I want to try out Strapi :p Move articles to Strapi and fetch from there
 */
export const getStaticPaths = () => {
  const slugs = ['choosing-banking-products', 'paying-bills'];

  return {
    paths: slugs.map(slug => ({
      params: {slug}
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  const res = await fetch(`http://localhost:3001/articles/${slug}`);
  const article = await res.json();
  
  return {props: {article}};
}