<template>
	<div>
		<section class="section-404">
			<section class="section-404__content">
				<h3>404</h3>
				<p>We are sorry, but the page you requested was not found</p>
				<router-link class="btn-primary" to="/"
					>Back to home&nbsp;
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="17"
						viewBox="0 0 18 17"
						fill="none"
					>
						<path
							d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
							stroke="#CDA274"
							style="
								stroke: #cda274;
								stroke: color(display-p3 0.8039 0.6353 0.4549);
								stroke-opacity: 1;
							"
							stroke-width="2"
							stroke-linecap="square"
							stroke-linejoin="round"
						/></svg
				></router-link>
			</section>

			<img class="section-404__photo" src="../assets/img/notfoundpage/not_found.jpg" alt="404">

		</section>
	</div>
</template>

<script>
export default {
	name: 'NotFoundPage',

	data() {
		return {};
	},

	mounted() {},

	methods: {},
};
</script>

<style lang="sass" scoped>
.section-404
	margin-bottom: 40rem
	display: flex
	gap: 8rem
	align-items: center

	&__photo
		border-radius: 0px 0px 0px 353px

	&__content
		width: 57rem
		display: flex
		flex-direction: column
		gap: 2rem

		& h3
			color: #CDA274
			font-family: DM Serif Display
			font-size: 25rem
			font-style: normal
			font-weight: 400
			line-height: 125%

		& p
			color: #292F36
			font-family: DM Serif Display
			font-size: 3.5rem
			font-style: normal
			font-weight: 400
			line-height: 150%
			letter-spacing: .035rem

.btn-primary
	display: flex
	justify-content: center
	align-items: center
	width: 25.3rem
	padding: 2.6rem 0 2.6rem 0
	border-radius: 18px
	background: #292F36
	box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35)
	color: #FFF
	text-align: center
	font-family: Jost
	font-size: 18px
	font-style: normal
	font-weight: 600
	line-height: 125%
	letter-spacing: 0.36px
</style>
