export function TimeConverter() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth()
    let year = date.getFullYear()
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let prefix = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
                  "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
                  "21st", "22th", "23th", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
    return (
        <div>
            {months[month] + " " + prefix[day] + " " + year}
        </div>
    )
}