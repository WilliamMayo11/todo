const _environment = {
  development: {
    API_URL: 'http://localhost:3000/'
  }
}

export default _environment;


// code below from Biayo App - Dave Billingham

// const _Environments = {
//     production:  {
//       API_URL: 'https://biayo.com/api/',
//       FILE_URL: 'http://media.biayo.com/files/'
//     },
//     development: {
//       API_URL: 'http://localhost:3000/',
//       FILE_URL: 'http://localhost:3000/files/'
//     }
// }

// const getPlatform = () => {
//   return 'development'
// }

// const getEnvironment = () => {
//     // Insert logic here to get the current platform (e.g. staging, production, etc)
//     const platform = getPlatform()

//     // ...now return the correct environment
//     return _Environments[platform]
// }


// export default getEnvironment();
