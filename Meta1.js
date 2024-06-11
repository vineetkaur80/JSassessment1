// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _haircolor, _clothType, _bling) {
const NFT = {
    "name" : _name,
    "haircolor" : _haircolor,
    "clothType" : _clothType,
    "bling" : _bling,
}
NFTs.push(NFT);
console.log("Minted : " +_name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i< NFTs.length; i++) {
        console.log("\nID: \t\t" + (i+1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Haircolor: \t" +NFTs[i].haircolor)
        console.log("clothType: " + NFTs[i].clothType);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Sam", "Black", "Hoodie", "Gold Chain");
mintNFT("John", "Brown", "Hoodie", "Gold Watch");
mintNFT("Chris", "Black", "Shirt", "Silver Chain");
mintNFT("Tina", "Blue", "jumpsuit", "Gold Chain");
listNFTs();
getTotalSupply();

