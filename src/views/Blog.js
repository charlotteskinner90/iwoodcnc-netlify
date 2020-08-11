import React from 'react'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/old_components/PageHeader'
import PostCategoriesNav from '../components/old_components/PostCategoriesNav'
import PostSection from '../components/old_components/PostSection'

import './Blog.css'

export default ({
  fields,
  posts = [],
  postCategories = [],
  showFeatured = true
}) => {
  const { title, subtitle, featuredImage } = fields
  posts = _sortBy(posts, ['date']).reverse()

  return (
    <main className='Blog'>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}

      {!!posts.length && <PostSection posts={posts} />}
    </main>
  )
}
