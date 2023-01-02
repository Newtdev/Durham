import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addNewProject } from "../../../pages/Dashboard/add-project/projectSlice";

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
	tagTypes: ["vendors", "product-managers", "durham-settings",'projects', 'dashboard'],
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
			query: (query ='') => {
				return {
					url: `project-managers?search=${query}&limit=10`,

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
					url: `project-manager/${id}`,
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
			query: (term="") => {
				return {
					url: `vendors?search=${term}&limit=10`,
					method: "GET",
				};
			},
			providesTags: ["vendors"],
			// transformResponse: (response) => response.data,
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
		// PROJECT DASHBOARD INFORMATION
		fetchDashboard: builder.query({
			query: () => {
				return {
					url: "dashboard",
					method: "GET",
				};
			},
			providesTags: ["dashboard"],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		// ADD PROJECT API
		addProjects: builder.mutation({
			query: (info) => {
				return {
					url: "projects",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			invalidatesTags: ["projects",'dashboard'],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response,
		}),
		fetchProjects: builder.query({
			query: (query='') => {
				return {
					url: `projects?search=${query}&limit=10`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},
			providesTags: ["projects", 'dashboard'],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		deleteProject: builder.mutation({
			query: (id) => {
				return {
					url: `projects/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "DELETE",
				};
			},
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,

			invalidatesTags: (result) => ["projects", 'dashboard'],
		}),
		
		fetchSingleProject: builder.query({
			query: (slug) => {
				return {
					url: `projects/by-slug/${slug}`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				
				};
			},
			async onQueryStarted(slug,{dispatch, queryFulfilled}) {
			
				try {
					const {data} = await queryFulfilled;
					dispatch(addNewProject(data.data))
				} catch (error) {
					throw error
					
				}
			},
			// providesTags: ["projects", 'dashboard'],
			// transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),


		addProjectVendor: builder.mutation({
			query: (info) => {
				return {
					url: "projects/add-vendor",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			invalidatesTags: ["projects", 'dashboard'],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		addProjectDocument: builder.mutation({
			query: (info) => {
				console.log(info)
				return {
					url: "projects/add-document",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			invalidatesTags: ["projects", 'dashboard'],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),


		// ADD VENDOR TO PROJECTS
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
	useFetchProjectsQuery,
	useAddProjectsMutation,
	useAddProjectVendorMutation,
	useFetchDashboardQuery,
	useFetchSingleProjectQuery,
	useDeleteProjectMutation,
	useAddProjectDocumentMutation
} = DurhamsApi;
