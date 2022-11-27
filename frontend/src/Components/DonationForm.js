function DonationForm(){

    return(
        <div className="donationForm">
            Donate to us! Make an online donation.
            <form onSubmit={()=>{}}>
                <input placeholder="Name(optional)"/>
                <button>$5</button>
                <button>$20</button>
                <button>$40</button>
                <input placeholder="other amount($)" />
                <button type="submit">Donate</button>
            </form>
        </div>
    )
}

export default DonationForm