<template>
	<div>
		<main>
			<div class="blog-details-content__background-photo"></div>
			<section class="blog-details-content">
				<div
					class="blog-details-content__left-side"
					v-for="article in filteredArticles"
					:key="article.id"
				>
					<h2 class="blog-details-content__left-side-heading mb-20">
						{{ article.title }}
					</h2>
					<div
						class="blog-details-content__article-content"
						v-html="article.content"
					></div>
				</div>
				<aside class="blog-details-content__right-side">
					<h4 class="blog-details-content__right-side-tag">Tags</h4>

					<div class="blog-details-content__right-side-tags">
						<label
							v-for="tag in tags"
							:key="tag"
							:class="{
								'blog-details-content__right-side-tag-button': true,
								'blog-details-content__right-side-tag-button-active':
									selectedTag === tag,
							}"
						>
							<input
								type="radio"
								v-model="selectedTag"
								:value="tag"
								@change="filterArticles"
							/>
							{{ tag }}
						</label>
					</div>
				</aside>
			</section>
		</main>
	</div>
</template>

<script>
export default {
	name: 'BlogDetailsPage',

	data() {
		return {
			tags: [
				'Kitchen',
				'Bedroom',
				'Building',
				'Architecture',
				'Kitchen Planning',
				'Bathroom',
			],
			articles: [
				{
					id: 1,
					title: 'Let’s Get Solution for Building Construction Work',
					content: `<img class="blog-details-content__left-side-kitchen-top-img" src="/img/blogpage/top-img.jpg">
						<div class="blog-details-content__left-side-kitchen-top-img-description">
							<p>26 December,2022</p>
							<p>Interior / Home / Decore</p>
						</div>
						<p class="blog-details-content__left-side-kitchen-top-text mb-20">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
						<br/>
						<br/>
						Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
						<div class="blog-details-content__left-side-kitchen-middle-block">
						<p class="blog-details-content__left-side-kitchen-middle-block-dq">“</p>
						<p class="blog-details-content__left-side-kitchen-middle-block-text">The details are not the details.<br/>They make the design.</p>
						</div>
						<h2 class="blog-details-content__left-side-heading mb-20">Design sprints are great</h2>
						<p class="blog-details-content__left-side-kitchen-top-text mb-24">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
						<div class="blog-details-content__left-side-kitchen-middle-block-list">
							<div class="blog-details-content__left-side-kitchen-middle-block-list_number">
								<p>1</p>
							</div>
							<div>
								<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
							</div>
						</div>
						<div>
							<div class="blog-details-content__left-side-kitchen-middle-block-list">
							<div class="blog-details-content__left-side-kitchen-middle-block-list_number">
								<p>2</p>
							</div>
							<div>
								<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
							</div>
						</div>
						<div class="blog-details-content__left-side-kitchen-middle-block-list mb-44">
							<div class="blog-details-content__left-side-kitchen-middle-block-list_number">
								<p>3</p>
							</div>
							<div>
								<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
							</div>
						</div>
						</div>
						
						<img class="blog-details-content__left-side-kitchen-bottom-img mb-35" src="/img/blogpage/bottom-img.jpg">
						<p class="blog-details-content__left-side-kitchen-top-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
						`,
					tags: ['Kitchen'],
				},
				{
					id: 2,
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing - 2',
					content: `<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>`,
					tags: ['Bedroom'],
				},
				{
					id: 3,
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing - 3',
					content: `<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>`,
					tags: ['Building'],
				},
				{
					id: 4,
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing - 4',
					content: `<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>`,
					tags: ['Architecture'],
				},
				{
					id: 5,
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing - 5',
					content: `<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>`,
					tags: ['Kitchen Planning'],
				},
				{
					id: 6,
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing - 6',
					content: `<p class="blog-details-content__left-side-kitchen-top-text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>`,
					tags: ['Bathroom'],
				},
			],
			selectedTag: 'Kitchen',
		};
	},

	methods: {
		filterArticles() {
			if (this.selectedTag) {
				return this.articles.filter(article =>
					article.tags.includes(this.selectedTag)
				);
			} else {
				return this.articles;
			}
		},
		resetFilter() {
			this.selectedTag = 'Kitchen';
		},
	},

	computed: {
		filteredArticles() {
			if (this.selectedTag) {
				return this.articles.filter(article =>
					article.tags.includes(this.selectedTag)
				);
			} else {
				return this.articles;
			}
		},
	},
};
</script>

<style lang="sass">


.blog-details-content
	display: flex
	justify-content: space-between

	&__background-photo
		background: url(../assets/img/blog_details_top_background.jpg), lightgray 50% / cover no-repeat
		height: 35rem
		background-size: 192rem
		margin: 0 -36rem
		margin-bottom: 20rem

	&__left-side
		margin-bottom: 20rem
		max-width: 80rem
		display: flex
		flex-direction: column

	&__left-side-heading
		color: #292F36
		font-family: "DM Serif Display"
		font-size: 5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .1rem

	&__left-side-kitchen-top-img
		border-radius: 5rem
		margin-bottom: 4.6rem

	&__left-side-kitchen-top-img-description
		color: #4D5053
		font-family: Jost
		font-size: 1.6rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .016rem
		text-transform: capitalize
		display: flex
		justify-content: space-between
		margin-right: 6.4rem
		margin-bottom: 4.8rem

	&__left-side-kitchen-top-text
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem

	&__left-side-kitchen-middle-block
		height: 27rem
		background-color: #F4F0EC
		border-radius: 5rem
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		margin-bottom: 2.7rem

	&__left-side-kitchen-middle-block-dq
		color: #CDA274
		text-align: center
		font-family: "DM Serif Display"
		font-size: 20rem
		font-weight: 400
		line-height: 125%
		font-style: italic
		letter-spacing: .4rem
		transform: rotate(180deg)
		display: inline-block
		margin-top: -12rem
		margin-left: 3.5rem

	&__left-side-kitchen-middle-block-text
		color: #CDA274
		text-align: center
		font-family: "DM Serif Display"
		font-size: 2.5rem
		font-style: italic
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem
		margin-top: -4rem

	&__left-side-kitchen-middle-block-list
		display: flex
		gap: 1.4rem
		width: 72rem

		&_number
			color: #CDA274
			font-family: "DM Serif Display"
			font-size: 2rem
			font-style: normal
			font-weight: 400
			line-height: 125%
			letter-spacing: .04rem

	&__left-side-kitchen-middle-block-list:not(:last-child)
		margin-bottom: 3.2rem

	&__left-side-kitchen-bottom-img
		border-radius: 5rem


	&__right-side
		display: flex
		flex-direction: column

	&__right-side-tag
		color: #292F36
		font-family: "DM Serif Display"
		font-size: 2.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem
		margin-bottom: 2.4rem

	&__right-side-tags
		display: flex
		flex-wrap: wrap
		gap: 1rem
		margin-bottom: 1.1rem
		width: 34rem

	&__right-side-tag-button
		display: inline-block
		padding: .9rem 3rem
		border-radius: 1rem
		cursor: pointer
		color: #292F36
		background-color: #F4F0EC
		text-align: center
		font-family: Jost
		font-size: 18px
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: 0.36px
		transition: all .2s

	&__right-side-tag-button:hover
		filter: contrast(50%)
		transition: all .2s

	&__right-side-tag-button input
		display: none
		transition: all .2s

	&__right-side-tag-button-active
		background-color: #292F36
		color: #FFF
		transition: all .2s

.mb-20
	margin-bottom: 2rem

.mb-24
	margin-bottom: 2.4rem

.mb-32
	margin-bottom: 3.2rem

.mb-35
	margin-bottom: 3.5rem

.mb-44
	margin-bottom: 4.4rem
</style>
