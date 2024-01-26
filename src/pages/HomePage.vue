<template>
	<div>
		<main>
			<section class="topContent">
				<div class="topContent__description">
					<h2 class="topContent__description-heading">
						Let Your Home Be Unique
					</h2>
					<p class="topContent__description-text">
						There are many variations of the passages of lorem Ipsum
						fromavailable, majority.
					</p>
					<router-link to="project">
						<button class="topContent__button" type="button">
							<span>Get Started</span
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="17"
								viewBox="0 0 18 17"
								fill="none"
							>
								<path
									d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
									stroke="#CDA274"
									stroke-width="2"
									stroke-linecap="square"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</router-link>
				</div>
			</section>
			<section class="midContent">
				<div class="midContent__heading">
					<h2>Follow Our Projects</h2>
					<p>
						It is a long established fact that a reader will be distracted by
						the of readable content of page lookings at its layouts points.
					</p>
				</div>
				<div class="midContent__box">
					<div class="midContent__box-1">
						<img
							class="midContent__box-img1"
							src="../assets/img/middle_img_left_top.jpg"
							alt="middle_img_left_top"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<buttonToProject />
						</div>
					</div>
					<div class="midContent__box-2">
						<img
							class="midContent__box-img2"
							src="../assets/img/middle_img_right_top.jpg"
							alt="middle_img_right_top"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<buttonToProject />
						</div>
					</div>
					<div class="midContent__box-3">
						<img
							class="midContent__box-img3"
							src="../assets/img/middle_img_left_bottom.jpg"
							alt="middle_img_left_bottom"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<buttonToProject />
						</div>
					</div>
					<div class="midContent__box-4">
						<img
							class="midContent__box-img4"
							src="../assets/img/middle_img_right_bottom.jpg"
							alt="middle_img_right_bottom"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<buttonToProject />
						</div>
					</div>
				</div>
			</section>
			<section class="info-bock">
				<div class="info-bock__box">
					<p class="info-bock__box-numbers">12</p>
					<p class="info-bock__box-text">Years Of Experiance</p>
				</div>
				<div class="info-bock__box">
					<p class="info-bock__box-numbers">85</p>
					<p class="info-bock__box-text">Success Project</p>
				</div>
				<div class="info-bock__box">
					<p class="info-bock__box-numbers">15</p>
					<p class="info-bock__box-text">Active Project</p>
				</div>
				<div class="info-bock__box">
					<p class="info-bock__box-numbers">95</p>
					<p class="info-bock__box-text">Happy Customers</p>
				</div>
				<!-- info line -->
			</section>
			<section class="artices-and-news">
				<div class="artices-and-news__heading">
					<h2 class="artices-and-news__heading-title">Articles & News</h2>
					<p class="artices-and-news__heading-text">
						It is a long established fact that a reader will be distracted by
						the of readable content of a page when lookings at its layouts the
						points of using.
					</p>
				</div>
				<div class="artices-and-news__projects-container">
					<div class="artices-and-news__project-box">
						<div class="artices-and-news__project-img">
							<div class="artices-and-news__project-img--1">
								<p class="artices-and-news__project-img-description">
									Kitchan Design
								</p>
							</div>
						</div>
						<h3 class="artices-and-news__project-box-title">
							Let’s Get Solution For Building Construction<br />Work
						</h3>
						<p class="artices-and-news__project-box-date">26 December,2022</p>
						<router-link to="/blog">
							<svg
								class="artices-and-news__project-box-button"
								width="52"
								height="53"
								viewBox="0 0 52 53"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
								<path
									d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
									stroke="#292F36"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</router-link>
					</div>

					<div class="artices-and-news__project-box">
						<div class="artices-and-news__project-img">
							<div class="artices-and-news__project-img--2">
								<p class="artices-and-news__project-img-description">
									Living Design
								</p>
							</div>
						</div>
						<h3 class="artices-and-news__project-box-title">
							Low Cost Latest Invented<br />Interior Designing<br />Ideas.
						</h3>
						<p class="artices-and-news__project-box-date">22 December,2022</p>
						<router-link to="/blog">
							<svg
								class="artices-and-news__project-box-button"
								width="52"
								height="53"
								viewBox="0 0 52 53"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
								<path
									d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
									stroke="#292F36"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</router-link>
					</div>

					<div class="artices-and-news__project-box">
						<div class="artices-and-news__project-img">
							<div class="artices-and-news__project-img--3">
								<p class="artices-and-news__project-img-description">
									Interior Design
								</p>
							</div>
						</div>
						<h3 class="artices-and-news__project-box-title">
							Best For Any Office &<br />Business Interior<br />Solution
						</h3>
						<p class="artices-and-news__project-box-date">25 December,2022</p>
						<router-link to="/blog">
							<svg
								class="artices-and-news__project-box-button"
								width="52"
								height="53"
								viewBox="0 0 52 53"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
								<path
									d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
									stroke="#292F36"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</router-link>
					</div>
				</div>

				<!-- img*3 -->
			</section>
		</main>
	</div>
</template>

<script>
import buttonToProject from '@/components/buttonToProject';

export default {
	name: 'HomePage',
	components: {
		buttonToProject,
	},
	data() {
		return {};
	},
	methods: {
		redirectToProjectPage() {
			`/project`;
		},
	},
	computed: {},
	props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.header
	display: flex
	align-items: center
	justify-content: space-between
	margin-top: 5.2rem
	margin-bottom: 6rem

	&__logoAndName
		display: flex
		gap: 1rem

	&__heading
		color: #292f36
		font-family: DM Serif Display
		font-size: 4rem
		font-style: normal
		font-weight: 400
		line-height: 125%

	&__nav
		display: flex
		gap: 4.2rem

	&__nav a
		color: #292F36
		font-family: Jost
		font-size: 2rem
		font-style: normal
		font-weight: 400
		line-height: 125%

.topContent
	height: 75.8rem
	background: url(../assets/img/main_img_big_1.jpg), lightgray 50% / cover no-repeat
	position: relative
	border-radius: 8rem
	margin-bottom: 9.6rem

	&__description
		position: absolute
		top: 20.8rem
		left: 5.2rem

	&__description-heading
		color: #292F36
		font-family: DM Serif Display
		font-size: 6.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		width: 43.4rem
		padding-bottom: 1.8rem

	&__description-text
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem
		width: 43.4rem
		padding-bottom: 2.1rem

	&__button
		display: flex
		padding: 2.6rem 4.9rem 2.6rem 4.8rem
		flex-direction: row
		justify-content: center
		align-items: center
		gap: 1rem
		border-radius: 1.8rem
		background: #292F36
		box-shadow: 0rem 1rem 2rem 0rem rgba(192, 192, 192, 0.35)
		cursor: pointer
		transition: all .3s


	&__button:hover
		filter: contrast(90%) drop-shadow(3px 4px 9px rgba(0, 0, 0, 0.6))
		transform: scale(1.05)
		transition: all .3s

	&__button span
		color: #FFF
		text-align: center
		font-family: Jost
		font-size: 18px
		font-style: normal
		font-weight: 600
		line-height: 125%
		letter-spacing: .036rem

.midContent
	display: flex
	flex-direction: column

	&__heading
		display: flex
		flex-direction: column
		align-items: center
		gap: .8rem
		margin-bottom: 9.3rem

	&__heading h2
		color: #292F36
		text-align: center
		font-family: DM Serif Display
		font-size: 5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .1rem
		align-self: center

	&__heading p
		display: inline-block
		color: #4D5053
		text-align: center
		font-family: Jost
		font-size: 22px
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: 0.022rem
		width: 73.7rem

	&__box
		display: flex
		flex-direction: row
		flex-wrap: wrap
		justify-content: space-between
		margin-bottom: 10rem

	&__box-1, &__box-2
		margin-bottom: 5.6rem

	&__box-img1
		border-radius: 0rem 8rem 0rem 0rem
		margin-bottom: 2.4rem
		width: 55rem

	&__box-img2
		border-radius: 8rem 0rem 0rem 0rem
		margin-bottom: 2.4rem
		width: 55rem

	&__box-img3
		border-radius: 0px 0px 80px 0px
		margin-bottom: 2.4rem
		width: 55rem

	&__box-img4
		border-radius: 0px 0px 0px 80px
		margin-bottom: 2.4rem
		width: 55rem

	&__box-description
		position: relative

	&__box-description a
		position: absolute
		top: -.5rem
		left: 48rem

	&__box h3
		color: #292F36
		font-family: DM Serif Display
		font-size: 2.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem

	&__box p
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem

.info-bock
	background-color: #F4F0EC
	margin: 0 -36rem
	height: 45.7rem
	display: flex
	gap: 7.6rem
	justify-content: center
	align-items: center
	margin-bottom: 9.6rem

	&__box:not(:last-child)
		border-right: .1rem solid #CDA274
		height: 13rem
		display: flex
		align-items: center
		justify-content: center
		padding-right: 5.6rem

	&__box
		display: flex
		flex-direction: column
		text-align: center
		gap: 1.6rem

	&__box-numbers
		color: #CDA274
		font-family: "DM Serif Display"
		font-size: 8.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .17rem

	&__box-text
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .22rem


.artices-and-news
	margin-bottom: 9.6rem

	&__heading
	display: flex
	flex-direction: column
	align-items: center
	text-align: center

	&__heading-title
		color: #292F36
		text-align: center
		font-family: "DM Serif Display"
		font-size: 5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .1rem
		margin-bottom: 1.2rem

	&__heading-text
		color: #4D5053
		text-align: center
		font-family: Jost
		font-size: 22px
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: 0.22px
		max-width: 81.1rem
		margin-bottom: 5.2rem

	&__projects-container
		display: flex
		gap: 2.7rem

	&__project-box
		border-radius: 6.2rem
		padding: 2.1rem
		border: 1px solid #E7E7E7
		box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)
		text-align: left
		position: relative
		transition: all .3s ease-in-out
		// background-color: #F4F0EC

	&__project-box:hover
		background-color: #F4F0EC
		transition: all .3s ease-in-out

	&__project-box:hover &__project-box-button > circle
		fill: white
		transition: all .3s ease-in-out

	&__project-img
		position: relative

		&--1
			background: url(../assets/img/blog/top_left.jpg)
			border-radius: 4.5rem 4.5rem 0 0
			width: 34rem
			height: 29rem
			background-size: cover
			background-position: center
			width: 34rem
			margin-bottom: 2.1rem

		&--2
			background: url(../assets/img/blog/top_middle.jpg)
			border-radius: 4.5rem 4.5rem 0 0
			width: 34rem
			height: 29rem
			background-size: cover
			background-position: center
			width: 34rem
			margin-bottom: 2.1rem

		&--3
			background: url(../assets/img/blog/top_right.jpg)
			border-radius: 4.5rem 4.5rem 0 0
			width: 34rem
			height: 29rem
			background-size: cover
			background-position: center
			width: 34rem
			margin-bottom: 2.1rem

		&-description
			position: absolute
			bottom: 2rem
			left: 2rem
			padding: .8rem 1.5rem 1rem 1.1rem
			background-color: white
			border-radius: .8rem .8rem .8rem 0rem

	&__project-img-description
		color: #4D5053
		font-family: Jost
		font-size: 16px
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: 0.16px
		text-transform: capitalize

	&__project-box-title
		color: #292F36
		font-family: "DM Serif Display"
		font-size: 2.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem
		margin-bottom: 3rem

	&__project-box-date
		color: #4D5053
		font-family: Jost
		font-size: 1.6rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .016rem
		text-transform: capitalize
		padding-bottom: 3rem

	&__project-box-button
		position: absolute
		right: 2.1rem
		bottom: 3.6rem
		border: none
		cursor: pointer
		transition: all .3s ease-in-out
</style>
