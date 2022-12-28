import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/***
 * login?email=omotolaniolurotimi@gmail.com&password=ThinTree21+++
 */

export const DurhamsApi = createApi({
	reducerPath: "durham",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://durham.cfcing.org/api/",
		prepareHeaders: (headers, { getState }) => {
			const token = getState().loginReducer.accessToken;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["vendors", "product-managers", "durham-settings"],
	endpoints: (builder) => ({
		userLogin: builder.mutation({
			query: (info) => {
				return {
					url: "login",
					method: "POST",
					headers: {
						Accept: "application/json",
					},
					// credentials: false,
					body: info,
				};
			},
			transformResponse: (response) => response.data,
			transformErrorResponse: (response) => response.data,
		}),
		forgotPassword: builder.mutation({
			query: (email) => {
				return {
					url: "forgot-password",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: email,
				};
			},
			transformResponse: (response, meta, arg) => response,

			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		resetPassword: builder.mutation({
			query: (info) => {
				// accessToken, password, confirm_password, email
				return {
					url: "reset-password",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			transformResponse: (response, meta, arg) => response,

			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		addProjectManager: builder.mutation({
			query: (info) => {
				return {
					url: "project-managers",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,

			invalidatesTags: (result) => ["product-managers"],
		}),

		// GET REQUEST FROM THE DATABASE
		fetchProjectManager: builder.query({
			query: (token) => {
				return {
					url: `project-managers/by-token/${token}`,
					headers: {
						Accept: "application/json",
					},
					// credentials: "include",
					method: "GET",
				};
			},

			providesTags: (result, error, token) => ["product-managers"],
		}),
		updateProductManagerDetails: builder.mutation({
			query: ({ id, info }) => {
				return {
					url: `project-managers/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "PUT",
					body: info,
				};
			},
			invalidatesTags: ["product-managers"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		fetchAllProjectManager: builder.query({
			query: () => {
				return {
					url: "project-managers",

					method: "GET",
				};
			},
			providesTags: (result) => ["product-managers"],
		}),
		fetchSingleProjectManager: builder.query({
			query: (id) => {
				return {
					url: `project-managers/${id}`,
					method: "GET",
				};
			},
			transformResponse: (response, meta, arg) => response.data,
			providesTags: (result) => ["product-managers"],
		}),
		activateProjectManager: builder.mutation({
			query: (info) => {
				return {
					url: "project-manager/activate",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			transformResponse: (response, meta, arg) => response,

			transformErrorResponse: (response, meta, arg) => response.data,
			// invalidatesTags: (result) => ["REGISTERED_MANAGER_INFO", result],
		}),
		deleteProductManager: builder.mutation({
			query: (id) => {
				return {
					url: `product-manager/${id}`,
					headers: {
						Accept: "application/json",
					},
					// credentials: "include",
					method: "DELETE",
				};
			},
			invalidatesTags: ["product-managers"],
			transformResponse: (response, meta, arg) => response,

			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		resendToken: builder.query({
			query: (token) => {
				return {
					url: `resend-link/${token}`,
					method: "GET",
				};
			},
		}),
		getAllVendor: builder.query({
			query: (token) => {
				return {
					// url: `project-managers/by-token/${token}`,
					// headers: {
					// 	Accept: "application/json",
					// },
					// credentials: "include",
					method: "GET",
				};
			},
			providesTags: "vendors",
		}),
		addVendor: builder.mutation({
			query: (info) => {
				return {
					url: "vendors",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			transformResponse: (response) => response.data.data,
			transformErrorResponse: (response, meta, arg) => response.data,

			invalidatesTags: (result) => ["vendors"],
		}),
		fetchVendors: builder.query({
			query: () => {
				return {
					url: "vendors",
					method: "GET",
				};
			},
			providesTags: ["vendors"],
			transformResponse: (response) => response.data.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		editVendor: builder.mutation({
			query: ({ id, ...info }) => {
				return {
					url: `vendors/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "PUT",
					body: info,
				};
			},
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,

			invalidatesTags: (result) => ["vendors", result],
		}),

		deleteVendor: builder.mutation({
			query: (id) => {
				return {
					url: `vendors/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "DELETE",
				};
			},
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,

			invalidatesTags: (result) => ["vendors"],
		}),

		// 	DURHAM SETTINGS
		updateDurhamDetails: builder.mutation({
			query: (info) => {
				return {
					url: "settings",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			invalidatesTags: ["durham-settings"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		fetchDurham: builder.query({
			query: () => {
				return {
					url: "settings",
					method: "GET",
				};
			},
			providesTags: ["durham-settings"],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
	}),
});

export const {
	useGetDurhamsDetailsQuery,
	useUserLoginMutation,
	useAddProjectManagerMutation,
	useFetchProjectManagerQuery,
	useActivateProjectManagerMutation,
	useAddVendorMutation,
	useResendTokenQuery,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useDeleteProductManagerMutation,
	useDeleteVendorMutation,
	useEditVendorMutation,
	useFetchVendorsQuery,
	useUpdateDurhamDetailsMutation,
	useFetchDurhamQuery,
	useFetchAllProjectManagerQuery,
	useUpdateProductManagerDetailsMutation,
	useFetchSingleProjectManagerQuery,
} = DurhamsApi;
