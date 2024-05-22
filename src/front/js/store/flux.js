const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			isLoggedIn:false,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			

/* --------- De aqui en adelante van las funciones de flux  */

setLogin:()=>{
	setStore({isLoggedIn:true})
},
setLogout:()=>{
	setStore({isLoggedIn:false})
	localStorage.removeItem('token');
	
},


/* --------- FUNCION FLUX (fetch) PARA LOGIN----------- */

login: async (email, password) => {
    await fetch('https://super-duper-barnacle-74g6vpw66q42pwr5-3001.app.github.dev/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login exitoso:', data);

        localStorage.setItem('token', data.token);

        getActions().setLogin();
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
},

         
    getPosts: async () => {
        try {
            const response = await fetch('https://psychic-fortnight-5gg54q5jwv67fv9gj-3001.app.github.dev/api/post');
            const data = await response.json();
            setStore({ posts: data.img });
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    },
    createPost: async (img, bodytext) => {
        try {
            const response = await fetch('https://psychic-fortnight-5gg54q5jwv67fv9gj-3001.app.github.dev/api/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ img, bodytext })
            });
            const data = await response.json();
            getActions().getPosts(); // Refresh posts
            setStore({ message: data.msg });
        } catch (error) {
            console.error("Error creating post:", error);
        }
    },
      
    updatePost: async (postId, img, bodytext) => {
        try {
            const response = await fetch(`https://psychic-fortnight-5gg54q5jwv67fv9gj-3001.app.github.dev/api/post/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ img, bodytext })
            });
            const data = await response.json();
            getActions().getPosts(); // Refresh posts
            setStore({ message: data.msg });
        } catch (error) {
            console.error("Error updating post:", error);
        }
    },
      
      
    deletePost: async (postId) => {
        try {
            const response = await fetch(`https://psychic-fortnight-5gg54q5jwv67fv9gj-3001.app.github.dev/api/post/${postId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            getActions().getPosts(); // Refresh posts
            setStore({ message: data.msg });
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    },
      
      
    getSuggestions: async () => {
        try {
            const response = await fetch('https://psychic-fortnight-5gg54q5jwv67fv9gj-3001.app.github.dev/api/suggestion');
            const data = await response.json();
            setStore({ suggestions: data.suggestion });
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    },
      
      
    createSuggestion: async (suggestion) => {
        try {
            const response = await fetch('https://psychic-fortnight-5gg54q5jwv67fv9gj-3001.app.github.dev/api/suggestion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ suggestion })
            });
            const data = await response.json();
            getActions().getSuggestions(); // Refresh suggestions
            setStore({ message: data.msg });
        } catch (error) {
            console.error("Error creating suggestion:", error);
        }
    },

            // Fetch all suggestions
            getSuggestions: async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/suggestion`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setStore({ suggestions: data.suggestion });
                    console.log(data)
                } catch (error) {
                    console.error("Error fetching suggestions:", error);
                }
            },

            // Create a new suggestion
            createSuggestion: async (suggestion) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/suggestion`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ suggestion })
                    });
                    const data = await response.json();
                    getActions().getSuggestions(); // Refresh suggestions
                    setStore({ message: data.msg });
                } catch (error) {
                    console.error("Error creating suggestion:", error);
                }
            }

    };
export default getState;
