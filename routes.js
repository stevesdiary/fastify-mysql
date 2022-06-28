async function routes (fastify, options){
   //Declare a route 
   fastify.get('/', async(request, reply)=> {
      return {hello: 'Steve'}
   })
}

module.exports = routes