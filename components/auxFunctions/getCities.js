
const getCities = (receiver) => {
    if (receiver == "Paris") { return [{ label: "Marseille", value: "Marseille" }, { label: "Nice", value: "Nice" }, { label: "Lille", value: "Lille" },] }
    if (receiver == "Marseille") { return [{ label: "Paris", value: "Paris" }, { label: "Nice", value: "Nice" }, { label: "Lille", value: "Lille" },] }
    if (receiver == "Nice") { return [{ label: "Paris", value: "Paris" }, { label: "Marseille", value: "Marseille" }, { label: "Lille", value: "Lille" },] }
    if (receiver == "Lille") { return [{ label: "Paris", value: "Paris" }, { label: "Marseille", value: "Marseille" }, { label: "Nice", value: "Nice" },] }
}
export default getCities;