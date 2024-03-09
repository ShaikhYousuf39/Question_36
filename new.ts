import { text } from "stream/consumers";

function make_shirt(size: string , text: string): void {
    console.log(`you order a ${size} shirt where ${text} printed`);
    
}

make_shirt(`large`,`"i love pakitan"`)
make_shirt(`medium`,`"living in karachi"`)