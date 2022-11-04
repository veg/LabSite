//    
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";    
import  __ from 'https://deno.land/x/dirname/mod.ts';    
import { DB } from "https://deno.land/x/sqlite/mod.ts";    
import { readCSV, writeCSV, readCSVObjects, writeCSVObjects } from "https://deno.land/x/csv/mod.ts";    
import { pooledMap } from "https://deno.land/std/async/mod.ts";    
import { parse } from "https://deno.land/std/flags/mod.ts"


function transformPub(pub) {

	let authors = R.join(', ', R.map(author => R.join(' ',[author.given, author.family]), pub.author));

	let toReturn = {};
	toReturn['title'] = pub['title'];
	toReturn['authors'] = authors;
	toReturn['publication'] = pub['container-title'];
	toReturn['date'] = pub['issued']['date-parts'][0][0];
	toReturn['link'] = pub['URL'];
	return toReturn;

}

 async function transformFile(filePath:string) {    
    
  //let baseDir = '/home/sweaver/programming/hivtrace/hivclustering/data/auto_analysis/';    
  let publications = JSON.parse(await Deno.readTextFile(filePath));    
  let toReturn = R.indexBy(R.prop('title'), R.map(transformPub, publications));

	await Deno.stdout.write(new TextEncoder().encode(JSON.stringify(toReturn)))

  return 1;
 
}
 
await transformFile('methods.json') 
