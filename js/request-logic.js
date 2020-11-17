// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!

//You will need to implement the functionality for determining content 
//types for 'text/html', 'text/css', 'image/jpeg', and 'text/plain'

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1]
  if (extension === 'html') {
    return 'text/html'
  } else if (extension === 'css') {
    return 'text/css'
  } else if (extension === 'jpeg' || extension === 'jpg') {
    return 'image/jpeg'
  } else return 'text/plain'
  
}
