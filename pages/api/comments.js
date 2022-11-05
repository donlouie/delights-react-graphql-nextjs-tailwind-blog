import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI =
	'https://api-ap-northeast-1.hygraph.com/v2/cl9mnri8i4q2l01uh0mjzhwan/master';
const gs =
	'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjczMTE1OTEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5oeWdyYXBoLmNvbS92Mi9jbDltbnJpOGk0cTJsMDF1aDBtanpod2FuL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJkM2IzMDk5ZS04MzdhLTQ0MWItODc1OC1kNDk3ZTc0MWUyYjIiLCJqdGkiOiJjbDl5YTl0Ym4xajBzMDF0YjY4bXdnNnVuIn0.0ZUKbDLItSPFj8DWQJSu-cYyx8aImJT0mo6Wxb10OwVTh627vmdWzvlx1dnB2yMUKLn2QZNpZKYagcUDdh_UEXIBciswDRoacPC1rji6VmUbwA73k7qYHOwzfbMb0GU2fjksU0NMcoftYLHLlJR8_lOqrwcgmam0ZEj8MVmTbsuKDSCRDPkX3ZbBYJ4WtL6rRkvyudm1anLjKOxx-3enXs0ZZtylq0Wfs1plSTE3Kx8nDM-6R-jqG2X_SLsDgp8bPrM755TRSfNvv0LCOF4X1KcQw-0dc2acLCPECe38vw4NFB92lhn1-_8EjfbyOyl_CKmwOXUdnbz3dZARZENKCc6lBg2lRO4yO8I5mUwPBrOxuDAZwPCynalLejp2IVxZ1ZO-yyVzxCXqRkhr50FzRDT2yC_VoePoYy1HeKw8Ike4-QIB9n1PZ5Rfn_492_HIidmnVcgTaLNy9OLW1UEnfqMVsqYf6XietgfinVtsCGqfjNyLc_ZZaAIG47nuXn1mfInt7TPG512gbAfL-pzHJk5ybvlfXb4KTVIHnJPRrhVQhARyyLVpqXufcXqcpyKdmny96l5MpPTJqKy4DN81_bGRv0kOYMPCPcwz11qxul_gzZld5UH7o0H4hD4XcluREyVsI85M1tXnxv-nqw9mFbNQY-6Mk-PK8e81RY6l9Uk';

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
	const graphQLClient = new GraphQLClient(graphqlAPI, {
		headers: {
			authorization: `Bearer ${gs}`,
		},
	});

	const query = gql`
		mutation CreateComment(
			$name: String!
			$email: String!
			$comment: String!
			$slug: String!
		) {
			createComment(
				data: {
					name: $name
					email: $email
					comment: $comment
					post: { connect: { slug: $slug } }
				}
			) {
				id
			}
		}
	`;

	const result = await graphQLClient.request(query, {
		name: req.body.name,
		email: req.body.email,
		comment: req.body.comment,
		slug: req.body.slug,
	});

	return res.status(200).send(result);
}
