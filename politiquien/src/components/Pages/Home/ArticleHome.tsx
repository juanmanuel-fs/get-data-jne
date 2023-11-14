import React from 'react'
import CardArticle from './components/CardArticle'

function ArticleHome() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 [&>*:nth-child(1)]:rounded-ss-xl [&>*:nth-child(6)]:rounded-ee-xl [&>*:nth-child(2)]:rounded-tr-xl md:[&>*:nth-child(2)]:rounded-none [&>*:nth-child(5)]:rounded-es-xl md:[&>*:nth-child(5)]:rounded-none md:[&>*:nth-child(3)]:rounded-tr-xl md:[&>*:nth-child(4)]:rounded-es-xl'>
      <CardArticle/>
      <CardArticle/>
      <CardArticle/>
      <CardArticle/>
      <CardArticle/>
      <CardArticle/>
    </div>
  )
}

export default ArticleHome