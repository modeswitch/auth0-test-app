export default async function({ store, redirect, route, app }) {
  await new Promise((resolve, reject) => {
  	if(!app.$auth.loading) {
  		resolve()
  	} else {
	  	let unwatch = app.$auth.$watch('loading', loading => {
				if(false == loading) {
					unwatch()
					resolve()
				}
	  	})
	  }
  })

  if(!app.$auth.isAuthenticated) {
  	app.$auth.loginWithRedirect();
  }
}