import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { Article } from "@/pages/article/[slug]"
import { PageSection } from "@/components/Layout/Page"
import { Heading1 } from "@/components/Heading"
import { Header, Date, Content, Img, markdownComponents } from "./styles"
import { prettifyDateDetailed } from "@/utils/date"

export default function ArticleView(props: {article: Article}) {
  /* NOTE: img_url holds a filename for now. It needs to be updated later to hold an actual url - requires updating line #21 containing '<Img src=...' */
  const { title, img_url, content, created } = props.article;
  
  return (
    <PageSection>
      <Header>
        <Heading1>{title}</Heading1>
        <Date>{prettifyDateDetailed(created)}</Date>
      </Header>
      <Content>
        <Img src={require(`@/assets/images/${img_url}.jpg`)} alt='Paying credit bills early article image' />
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents} children={content} />
      </Content>
    </PageSection>
  )
}
