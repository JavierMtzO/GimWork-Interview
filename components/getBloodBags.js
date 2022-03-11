import React, { useContext } from 'react'
import TransferContext from "../context/Transfer/TransferContext";

const getBloodBags = (category, subcategory, sender) => {
    let numBloodBag = 100;
    const transferContext = useContext(TransferContext);
    switch (category) {
        case "A": {
            switch (subcategory) {
                case "plus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].aplus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].aplus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].aplus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].aplus }
                };
                case "minus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].aminus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].aminus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].aminus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].aminus }
                };
            }
        };
        case "B": {
            switch (subcategory) {
                case "plus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].bplus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].bplus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].bplus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].bplus }
                };
                case "minus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].bminus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].bminus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].bminus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].bminus }
                };
            }
        };
        case "O": {
            switch (subcategory) {
                case "plus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].oplus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].oplus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].oplus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].oplus }
                };
                case "minus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].ominus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].ominus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].ominus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].ominus }
                };
            }
        };
        case "AB": {
            switch (subcategory) {
                case "plus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].abplus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].abplus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].abplus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].abplus }
                };
                case "minus": {
                    if (sender == "Paris") { numBloodBag = transferContext.bloodBags[0].abminus }
                    if (sender == "Marseille") { numBloodBag = transferContext.bloodBags[1].abminus }
                    if (sender == "Nice") { numBloodBag = transferContext.bloodBags[2].abminus }
                    if (sender == "Lille") { numBloodBag = transferContext.bloodBags[3].abminus }
                };
            };
        };
    }
}

export default getBloodBags;