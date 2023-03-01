import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addNewProject } from "../../../pages/Dashboard/add-project/projectSlice";
import { getFormResponse } from "../../../pages/forms/reducer";
import { userInfo } from "../../auth";

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
	tagTypes: [
		"vendors",
		"product-managers",
		"profile-image",
		"durham-settings",
		"projects",
		"dashboard",
		"school",
		"profile",
		"duplicate-project",
	],
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
			async onQueryStarted(info, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(userInfo(data));
				} catch (error) {
					// throw error
				}
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
			query: ({ queryValue, page }) => {
				return {
					url: `project-managers?search=${queryValue}&limit=10&page=${page}`,

					method: "GET",
				};
			},
			providesTags: (result) => ["product-managers"],
		}),
		getAllProjectManager: builder.query({
			query: ({ queryValue, page }) => {
				return {
					url: `project-managers?search=${queryValue}&limit=200&page=${page}`,

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
			transformErrorResponse: (response, meta, arg) => response.data,
			providesTags: (result) => [
				"product-managers",
				"profile-image",
				"profile",
			],
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
			query: ({ queryValue, page }) => {
				return {
					url: `vendors?search=${queryValue}&limit=6&page=${page}`,
					method: "GET",
				};
			},
			providesTags: ["vendors"],
			// transformResponse: (response) => response.data.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		getVendors: builder.query({
			query: ({ queryValue }) => {
				return {
					url: `vendors?search=${queryValue}&limit=200`,
					method: "GET",
				};
			},
			providesTags: ["vendors"],
			// transformResponse: (response) => response.data.data,
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

			invalidatesTags: (result) => ["vendors"],
		}),
		// fetchVendors: builder.query({
		//   query: ({ queryValue, page }) => {
		//     return {
		//       url: `vendors?search=${queryValue}&limit=6&page=${page}`,
		//       method: "GET",
		//     };
		//   },
		//   providesTags: ["vendors"],
		//   // transformResponse: (response) => response.data.data,
		//   transformErrorResponse: (response, meta, arg) => response.data,
		// }),
		// editVendor: builder.mutation({
		//   query: ({ id, ...info }) => {
		//     return {
		//       url: `vendors/${id}`,
		//       headers: {
		//         Accept: "application/json",
		//       },
		//       method: "PUT",
		//       body: info,
		//     };
		//   },
		//   transformResponse: (response) => response,
		//   transformErrorResponse: (response, meta, arg) => response.data,

		//   invalidatesTags: (result) => ["vendors", result],
		// }),

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

		// 	DURHAM SETTINGS
		// updateDurhamDetails: builder.mutation({
		//   query: (info) => {
		//     console.log(info);
		//     return {
		//       url: "settings",
		//       headers: {
		//         Accept: "application/json",
		//       },
		//       method: "POST",
		//       body: info,
		//     };
		//   },
		//   invalidatesTags: ["durham-settings"],
		//   transformResponse: (response) => response,
		//   transformErrorResponse: (response, meta, arg) => response.data,
		// }),
		// fetchDurham: builder.query({
		//   query: () => {
		//     return {
		//       url: "settings",
		//       method: "GET",
		//     };
		//   },
		//   providesTags: ["durham-settings"],
		//   transformResponse: (response) => response.data,
		//   transformErrorResponse: (response, meta, arg) => response.data,
		// }),
		// PROJECT DASHBOARD INFORMATION
		// fetchDashboard: builder.query({
		//   query: () => {
		//     return {
		//       url: "dashboard",
		//       method: "GET",
		//     };
		//   },
		//   providesTags: ["dashboard"],
		//   transformResponse: (response) => response.data,
		//   transformErrorResponse: (response, meta, arg) => response.data,
		// }),

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
			invalidatesTags: ["projects", "dashboard"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response,
		}),
		duplicateProject: builder.mutation({
			query: (id) => {
				return {
					url: `projects/${id}/duplicate`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response,
			invalidatesTags: ["duplicate-project"],
		}),
		updateProjects: builder.mutation({
			query: ({ id, ...info }) => {
				return {
					url: `projects/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "PUT",
					body: info,
				};
			},
			invalidatesTags: ["projects", "dashboard"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response,
		}),
		fetchProjects: builder.query({
			query: ({ query, page, params }) => {
				return {
					url: `projects?search=${query}&limit=10&page=${page}&filter=${params}`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},
			providesTags: ["projects", "dashboard"],
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

			invalidatesTags: (result) => ["projects", "dashboard"],
		}),

		fetchSingleProject: builder.query({
			query: (id) => {
				return {
					url: `projects/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},

			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(addNewProject(data.data));
				} catch (error) {
					// throw error
				}
			},
			providesTags: ["projects", "dashboard", "duplicate-project", "documents"],
			// transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		DeleteSchool: builder.mutation({
			query: (id) => {
				return {
					url: `schools/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "DELETE",
				};
			},
			invalidatesTags: ["projects", "school"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response,
		}),

		addSchool: builder.mutation({
			query: (info) => {
				return {
					url: "schools",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			invalidatesTags: ["projects", "school"],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		updateSchool: builder.mutation({
			query: ({ id, ...info }) => {
				return {
					url: `schools/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "PUT",
					body: info,
				};
			},
			invalidatesTags: ["projects", "school"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response?.data,
		}),

		fetchSchool: builder.query({
			query: () => {
				return {
					url: `schools?limit=200`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},
			providesTags: ["projects", "school"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response,
		}),

		fetchAllSchool: builder.query({
			query: ({ queryValue, page }) => {
				return {
					url: `schools?search=${queryValue}&limit=10&page=${page}`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},
			providesTags: ["projects", "school"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response,
		}),

		UpdateProfile: builder.mutation({
			query: (data) => {
				return {
					url: `update-profile`,
					headers: {
						Accept: "application/json",
					},
					body: data,
					method: "PUT",
				};
			},
			invalidatesTags: ["profile"],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		uploadProfilePhoto: builder.mutation({
			query: (info) => {
				return {
					url: `project-manager/photo`,
					headers: {
						Accept: "application/json",
					},
					body: info,
					method: "POST",
				};
			},
			invalidatesTags: ["profile-image"],
			transformResponse: (response) => response.data,
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
			invalidatesTags: ["projects", "dashboard"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		addProjectDocument: builder.mutation({
			query: (info) => {
				return {
					url: "projects/add-document",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: info,
				};
			},
			invalidatesTags: ["projects", "dashboard"],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		fillProjectDocument: builder.mutation({
			query: (formInfo) => {
				return {
					url: "projects/fill-form",
					headers: {
						Accept: "application/json",
					},
					method: "POST",
					body: formInfo,
				};
			},
			// invalidatesTags: ["projects", 'dashboard'],
			transformResponse: (response) => response,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		fetchFilledForm: builder.query({
			query: (id) => {
				return {
					url: `projects/forms/${id}`,
					headers: {
						Accept: "application/json",
					},
					method: "GET",
				};
			},
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(getFormResponse(data.data));
				} catch (error) {
					// throw error
				}
			},
			// providesTags: ["projects", 'dashboard'],
			// transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),

		UpdatePassword: builder.mutation({
			query: (info) => {
				return {
					url: `change-password`,
					headers: {
						Accept: "application/json",
					},
					body: info,
					method: "POST",
				};
			},
			invalidatesTags: ["profile"],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
		DeleteForm: builder.mutation({
			query: (info) => {
				return {
					url: `projects/remove-document`,
					headers: {
						Accept: "application/json",
					},
					body: info,
					method: "POST",
				};
			},
			invalidatesTags: ["documents"],
			transformResponse: (response) => response.data,
			transformErrorResponse: (response, meta, arg) => response.data,
		}),
	}),

	// fetchSingleProject: builder.query({
	//   query: (id) => {
	//     return {
	//       url: `projects/${id}`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "GET",
	//     };
	//   },
	//   async onQueryStarted(id, { dispatch, queryFulfilled }) {
	//     try {
	//       const { data } = await queryFulfilled;
	//       dispatch(addNewProject(data.data));
	//     } catch (error) {
	//       // throw error
	//     }
	//   },
	//   // providesTags: ["projects", 'dashboard'],
	//   // transformResponse: (response) => response.data,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),

	// addProjectDocument: builder.mutation({
	//   query: (info) => {
	//     return {
	//       url: "projects/add-document",
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "POST",
	//       body: info,
	//     };
	//   },
	//   invalidatesTags: ["projects", "dashboard"],
	//   transformResponse: (response) => response,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// fillProjectDocument: builder.mutation({
	//   query: (formInfo) => {
	//     console.log(formInfo);
	//     return {
	//       url: "projects/fill-form",
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "POST",
	//       body: formInfo,
	//     };
	//   },
	//   // invalidatesTags: ["projects", 'dashboard'],
	//   transformResponse: (response) => response,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),

	// fetchFilledForm: builder.query({
	//   query: (id) => {
	//     return {
	//       url: `projects/forms/${id}`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "GET",
	//     };
	//   },
	//   async onQueryStarted(id, { dispatch, queryFulfilled }) {
	//     try {
	//       const { data } = await queryFulfilled;
	//       dispatch(getFormResponse(data.data));
	//     } catch (error) {
	//       // throw error
	//     }
	//   },
	//   // providesTags: ["projects", 'dashboard'],
	//   // transformResponse: (response) => response.data,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),

	// addProjectVendor: builder.mutation({
	// 	query: (info) => {
	// 		return {
	// 			url: "projects/add-vendor",
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "POST",
	// 			body: info,
	// 		};
	// 	},
	// 	invalidatesTags: ["projects", 'dashboard'],
	// 	transformResponse: (response) => response,
	// 	transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// addProjectDocument: builder.mutation({
	// 	query: (info) => {
	// 		return {
	// 			url: "projects/add-document",
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "POST",
	// 			body: info,
	// 		};
	// 	},
	// 	invalidatesTags: ["projects", 'dashboard'],
	// 	transformResponse: (response) => response,
	// 	transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// fillProjectDocument: builder.mutation({
	// 	query: (formInfo) => {
	// 		return {
	// 			url: "projects/fill-form",
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "POST",
	// 			body: formInfo,
	// 		};
	// 	},
	// 	// invalidatesTags: ["projects", 'dashboard'],
	// 	transformResponse: (response) => response,
	// 	transformErrorResponse: (response, meta, arg) => response.data,
	// }),

	// fetchFilledForm: builder.query({
	// 	query: (id) => {
	// 		return {
	// 			url: `projects/forms/${id}`,
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "GET",

	// 		};
	// 	},
	// 	// async onQueryStarted(id,{dispatch, queryFulfilled}) {

	// 	// 	try {
	// 	// 		const { data } = await queryFulfilled;
	// 	// 		dispatch(getFormResponse(data.data))
	// 	// 	} catch (error) {
	// 	// 		// throw error

	// 	// 	}
	// 	// },
	// 	 providesTags: ["projects", 'dashboard'],
	// 	// // transformResponse: (response) => response.data,
	// 	// transformErrorResponse: (response, meta, arg) => response.data,
	// }),

	// // ADD SCHOOL
	// addSchool: builder.mutation({
	// 	query: (info) => {
	// 		return {
	// 			url: "schools",
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "POST",
	// 			body: info,
	// 		};
	// 	},
	// 	invalidatesTags: ["projects",'school'],
	// 	transformResponse: (response) => response.data,
	// 	transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// updateSchool: builder.mutation({
	// 	query: ({id,...info}) => {
	// 		return {
	// 			url: `schools/${id}`,
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "PUT",
	// 			body: info,
	// 		};
	// 	},
	// 	invalidatesTags: ["projects",'school'],
	// 	transformResponse: (response) => response,
	// 	transformErrorResponse: (response, meta, arg) => response,
	// }),
	// fetchAllSchool: builder.query({
	// 	query: ({ queryValue, page }) => {
	// 		return {
	// 			url: `schools?search=${queryValue}&limit=10&page=${page}`,
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "GET",

	// 		};
	// 	},
	// 	providesTags: ["projects",'school'],
	// 	transformResponse: (response) => response,
	// 	transformErrorResponse: (response, meta, arg) => response,
	// }),
	// fetchSchool: builder.query({
	// 	query: () => {
	// 		return {
	// 			url: `schools?limit=200`,
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			method: "GET",

	// 		};
	// 	},
	// 	providesTags: ["projects",'school'],
	// 	transformResponse: (response) => response,
	// 	transformErrorResponse: (response, meta, arg) => response,
	// }),

	// UpdateProfile: builder.mutation({
	// 	query: ({ id, ...info }) => {
	// 		return {
	// 			url: `update-profile`,
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 			body:info,
	// 			method: "PUT",

	// 		};
	// 	},
	// 	invalidatesTags: ["profile"],
	// 	transformResponse: (response) => response.data,
	// 	transformErrorResponse: (response, meta, arg) => response.data,
	// }),

	// ADD SCHOOL
	// addSchool: builder.mutation({
	//   query: (info) => {
	//     return {
	//       url: "schools",
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "POST",
	//       body: info,
	//     };
	//   },
	//   invalidatesTags: ["projects", "school"],
	//   transformResponse: (response) => response.data,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// updateSchool: builder.mutation({
	//   query: ({ id, ...info }) => {
	//     return {
	//       url: `schools/${id}`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "PUT",
	//       body: info,
	//     };
	//   },
	//   invalidatesTags: ["projects", "school"],
	//   transformResponse: (response) => response,
	//   transformErrorResponse: (response, meta, arg) => response,
	// }),
	// fetchAllSchool: builder.query({
	//   query: ({ queryValue, page }) => {
	//     return {
	//       url: `schools?search=${queryValue}&limit=10&page=${page}`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "GET",
	//     };
	//   },
	//   providesTags: ["projects", "school"],
	//   transformResponse: (response) => response,
	//   transformErrorResponse: (response, meta, arg) => response,
	// }),
	// DeleteSchool: builder.mutation({
	//   query: (id) => {
	//     return {
	//       url: `schools/${id}`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       method: "DELETE",
	//     };
	//   },
	//   invalidatesTags: ["projects", "school"],
	//   transformResponse: (response) => response,
	//   transformErrorResponse: (response, meta, arg) => response,
	// }),
	// UpdateProfile: builder.mutation({
	//   query: ({ id, ...info }) => {
	//     return {
	//       url: `update-profile`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       body: info,
	//       method: "PUT",
	//     };
	//   },
	//   invalidatesTags: ["profile"],
	//   transformResponse: (response) => response.data,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// UpdatePassword: builder.mutation({
	//   query: (info) => {
	//     return {
	//       url: `change-password`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       body: info,
	//       method: "POST",
	//     };
	//   },
	//   invalidatesTags: ["profile"],
	//   transformResponse: (response) => response.data,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// }),
	// uploadProfilePhoto: builder.mutation({
	//   query: (info) => {
	//     return {
	//       url: `project-manager/photo`,
	//       headers: {
	//         Accept: "application/json",
	//       },
	//       body: info,
	//       method: "POST",
	//     };
	//   },
	//   invalidatesTags: ["profile-image"],
	//   transformResponse: (response) => response.data,
	//   transformErrorResponse: (response, meta, arg) => response.data,
	// })
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
	useAddProjectDocumentMutation,
	useUpdateProjectsMutation,
	useFillProjectDocumentMutation,
	useFetchFilledFormQuery,
	useAddSchoolMutation,
	useDeleteSchoolMutation,
	useFetchAllSchoolQuery,
	useUpdateSchoolMutation,
	useUpdateProfileMutation,
	useUpdatePasswordMutation,
	useUploadProfilePhotoMutation,
	useGetVendorsQuery,
	useFetchSchoolQuery,
	useDuplicateProjectMutation,
	useGetAllProjectManagerQuery,
	useDeleteFormMutation,
} = DurhamsApi;
