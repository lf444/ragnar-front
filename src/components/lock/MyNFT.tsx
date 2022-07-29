import { Box, CircularProgress } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

<<<<<<< HEAD
const MyNFT = ({ userAddress }: { userAddress: string | undefined }) => {
  const [nftMetadata, setNftMetadata] = useState<any[]>([]);

  useEffect(() => {
    if (userAddress) {
      getNFTByOwner();
    }
  }, [userAddress]);

  const getNFTByOwner = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const lock = new ethers.Contract(
          contractAddress.NFTAddress,
          LOCKABI.abi,
          signer
        );
<<<<<<< HEAD
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
<<<<<<< HEAD
<<<<<<< HEAD
        const total = await lock.balanceOf(String(accounts));
        
        for (let i = 0; i < total; i++) {
          nftByUser.push(String(await lock.tokenOfOwnerByIndex(String(accounts), i)));
         }
         nftByUser.forEach(async (element) => nftMetadataByUser.push(await lock.tokenURI(element)))  
         
        console.log(nftMetadataByUser)
        
      } 
  } catch (error) {
    console.log(error)
=======
        const total = await lock.balanceOf(accounts[0]);
        for (let i = 0; i < +formatEther(total); i++) {
          nftByUser.push(await lock.tokenOfOwnerByIndex(accounts[0], i));
        }
=======
>>>>>>> 881e8eb (dev: add nft viewer)
=======
>>>>>>> 4485386 (dev: better metamask connexion gestion)

        let emptyNFt: any[] = [];
        const test = await lock.getNftsOfOwner(userAddress);
        const allNFTOwned = await Promise.all(
          test.map((e: any) => {
            return lock.tokenURI(e);
          })
        )
          .then((e) => {
            emptyNFt = e.map((e: any) => {
              return JSON.parse(
                Buffer.from(e.substring(29), "base64").toString()
              );
            });
          })
          .then(() => setNftMetadata(emptyNFt));
      }
    } catch (error) {
      console.log(error);
>>>>>>> 1bfe751 (dev: add nft fetch data)
    }
  };

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

=======
const MyNFT = ({
  nftMetadata,
  isLoadingMyNft,
}: {
  nftMetadata: any[];
  isLoadingMyNft: boolean;
}) => {
>>>>>>> 5133f0e (dev add loading on NFT page)
  return (
    <>
      <Carousel
        navButtonsAlwaysVisible
        NextIcon={<ArrowRightIcon />}
        PrevIcon={<ArrowLeftIcon />}
        indicatorContainerProps={{
          style: {
            marginTop: "1.5rem",
            textAlign: "center",
          },
        }}
      >
        {!isLoadingMyNft ? (
          nftMetadata.length > 0 ? (
            nftMetadata.map((meta, i) => (
              <Box
                sx={{
                  height: "300px",
                  width: "250px",
                  ml: "auto",
                  mr: "auto",
                }}
                key={i}
              >
                <object type="image/svg+xml" data={meta.image}></object>
              </Box>
            ))
          ) : (
            <></>
          )
        ) : (
          <>
            {" "}
            <CircularProgress
              size="6rem"
              sx={{
                margin: "auto",
              }}
            />
          </>
        )}
      </Carousel>
    </>
  );
};

export default MyNFT;
