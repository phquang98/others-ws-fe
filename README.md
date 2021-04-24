# Web Services Project Front End Part

## How

- `npm start`

## Notes

- [ ] delete json-server as it was only for mocking data
- [ ] delete ra-data-json-server later
- [ ] reading data from excel should be written as a Promise, in case its too big -> cause lagging
- [ ] for some reason, if dont provide header prop in Sheet2JSONOpts, will have a generated `__numrow__` in each entries, but when BE received, `__numrow` is not included in `req.body`
- [ ] disable `noImplicitAny` as cant find some types using this libs (e.g `props` from their UI)
- [ ] may use ra-data-simple-rest to bootstrap Data Providers instead of writing manually

- RA error response must return `{data: []}` is wrong, server must return like this `[...bunchOfObjHere]`
- `basePath` prop in Delete Btn to go to what URL after DEL ACTION is completed
