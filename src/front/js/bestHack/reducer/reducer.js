'use strict';
const getReducer = (settings) => (state = settings, action) => {
	console.log(action);
	switch(action.type) {
		
		case 'SET_PATH':
			return Object.assign({}, state, {
				currentPath: action.newPath,
			});

		case 'AUTH_SUCCESS':
			return Object.assign({}, state, {
				authError: false,
			});

		case 'AUTH_ERROR':
			return Object.assign({}, state, {
				authError: true,
			});

		case 'REGIST_SUCCESS':
			return Object.assign({}, state, {
				registError: false,
			});

		case 'REGIST_ERROR':
			return Object.assign({}, state, {
			 registError: true,
			});

		case 'SET_USER':
			return Object.assign({}, state, {
				userInfo: action.user,
				isLogin: true,
			});

			
		case 'TOGGLE_USER_WITHBLE':
			{
				let users = state.users.map((el) => {

				if (el.id === action.id) {
					el.isClose = !el.isClose;	
					//console.log('el.isClose: ', el.isClose);
				} 
				
				return el;
			});
			
			return Object.assign({}, state, {
				users,
			});
			}	
			

		case 'TOGGLE_ALG_WITHBLE':
			{
				let users = state.users.map((el) => {

					let flag = false;
					//console.log('flag: ', flag);

					el.algs = el.algs.map((el, id) => {
						//console.log(el);
						
						if (el.id === action.id) {
							el.isAlgSelected = true;
							flag = true;							
						} else {
							el.isAlgSelected = false;
							//flag = false;
						} 						
						//console.log('el.isAlgSelected : ', el.isAlgSelected );
						return el;
					});

					el.isUserSelected = flag;
					if (el.isUserSelected) {
						state.selectUser = el.name;
					}
					//console.log('el.isUserSelected: ', el.isUserSelected);

					return el;
				});
			
			return Object.assign({}, state, {
				users,
			});
			}
			
		case 'OPEN_BLOCKER': 
			return Object.assign({}, state, {
				blokerIsActive: true
			});
		
		case 'CLOSE_BLOCKER': 
			return Object.assign({}, state, {
				blokerIsActive: false
			});
		
		case 'OPEN_MY_ALG': 
		{
		let algs = state.myAlgs.map((el) => {

			if (el.id === action.id) {
				el.isAlgSelected = true;	
				
				
			} else {
				el.isAlgSelected = false;
				
			} 	
			//console.log('isAlgSelected: ', el.isAlgSelected);
			return el;
			});
			return Object.assign({}, state, {
				algs,
			});
		}
		

		default:
			return state;
	}


};
				

export default getReducer;