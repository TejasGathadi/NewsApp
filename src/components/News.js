import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  articles = [
    // {
    //   "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //   },
    //   "author": "Tara John, Mick Krever",
    //   "title": "Netanyahu won’t commit to abiding by ruling if Supreme Court strikes down controversial law - CNN",
    //   "description": "Israel’s Prime Minister Benjamin Netanyahu has refused to say if he would abide by any potential Supreme Court ruling striking down his controversial judicial reform law, as Israelis agonize over a looming showdown between their government and the court.",
    //   "url": "https://www.cnn.com/2023/07/27/middleeast/israel-benjamin-netanyahu-judicial-intl/index.html",
    //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230727141818-wolf-netanyahu-interview-072723-split.jpg?c=16x9&q=w_800,c_fill",
    //   "publishedAt": "2023-07-28T08:22:00Z",
    //   "content": "Israels Prime Minister Benjamin Netanyahu has refused to say if he would abide by any potential Supreme Court ruling striking down his controversial judicial reform law, as Israelis agonize over a lo… [+5360 chars]"
    // },
    // {
    //   "source": {
    //     "id": "bloomberg",
    //     "name": "Bloomberg"
    //   },
    //   "author": "Sujata Rao",
    //   "title": "Stock Market Today: Dow, S&P Live Updates for July 28 - Bloomberg",
    //   "description": "Bonds around the world extended a retreat as the Bank of Japan, so far a holdout on ultra-loose monetary policy, surprised investors by loosening its grip on yields.",
    //   "url": "https://www.bloomberg.com/news/articles/2023-07-27/stock-market-today-dow-s-p-live-updates",
    //   "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibTG29wXNY8w/v1/1200x800.jpg",
    //   "publishedAt": "2023-07-28T07:41:15Z",
    //   "content": "Bonds around the world extended a retreat as the Bank of Japan, so far a holdout on ultra-loose monetary policy, surprised investors by loosening its grip on yields.\r\nThe move sent Japans 10-year yie… [+145 chars]"
    // },
    // {
    //   "source": {
    //     "id": "fox-news",
    //     "name": "Fox News"
    //   },
    //   "author": "Melissa Rudy",
    //   "title": "Mysterious illness triggered by tick bite could affect thousands, yet many doctors are unaware of it - Fox News",
    //   "description": "Alpha-Gal Syndrome, a little-known, life-threatening food allergy triggered by tick bites, could be affecting hundreds of thousands of people in the U.S., the CDC warned in a new report.",
    //   "url": "https://www.foxnews.com/health/mysterious-illness-triggered-tick-bite-affect-thousands-many-doctors-unaware",
    //   "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/woman-stomach-pain.jpg",
    //   "publishedAt": "2023-07-28T07:00:00Z",
    //   "content": "A little-known, life-threatening food allergy\r\n that is triggered by a tick bite could be affecting hundreds of thousands of people in the U.S., the Centers for Disease Control and Prevention (CDC) w… [+7806 chars]"
    // },
    // {
    //   "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //   },
    //   "author": "Gawon Bae, Brad Lendon",
    //   "title": "Putin thanks North Korea for supporting Ukraine war as Pyongyang displays its nukes in parade - CNN",
    //   "description": "North Korea’s “firm support” for Russia’s war in Ukraine emboldens the two countries’ determination to cope with Western nations, Russian President Vladimir Putin said in a speech to North Korean officials on Thursday, according to a report in North Korean st…",
    //   "url": "https://www.cnn.com/2023/07/28/asia/putin-north-korea-ukraine-parade-intl-hnk/index.html",
    //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230728014319-05-putin-north-korea-ukraine-parade-intl-hnk.jpg?c=16x9&q=w_800,c_fill",
    //   "publishedAt": "2023-07-28T06:26:00Z",
    //   "content": "North Koreas firm support for Russias war in Ukraine emboldens the two countries determination to cope with Western nations, Russian President Vladimir Putin said in a speech to North Korean official… [+4068 chars]"
    // },
    // {
    //   "source": {
    //     "id": "axios",
    //     "name": "Axios"
    //   },
    //   "author": "Axios",
    //   "title": "Heat wave expands to more than two-thirds of U.S. population - Axios",
    //   "description": null,
    //   "url": "https://www.axios.com/2023/07/26/heat-wave-us-midwest-northeast-great-plains",
    //   "urlToImage": null,
    //   "publishedAt": "2023-07-28T05:29:40Z",
    //   "content": null
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "CBS Sports"
    //   },
    //   "author": "",
    //   "title": "Bungled opportunities to raid Big 12, passive leadership has Pac-12 on brink with Colorado departing in 2024 - CBS Sports",
    //   "description": "The Pac-12 had multiple chances to solidify its membership and grow the conference; instead, it finds itself fighting to stay alive",
    //   "url": "https://www.cbssports.com/college-football/news/bungled-opportunities-to-raid-big-12-passive-leadership-has-pac-12-on-brink-with-colorado-departing-in-2024/",
    //   "urlToImage": "https://sportshub.cbsistatic.com/i/r/2018/05/15/c270e876-540c-4bd8-a5b8-c1276d0bbc6a/thumbnail/1200x675/7b21486c0f789e1cb099feb1e5ee8472/pac-12-cracks-3.jpg",
    //   "publishedAt": "2023-07-28T05:01:00Z",
    //   "content": "The Pac-12 school with the best options finally exercised them. Turns out Colorado had the ability, motivation, history and level of impatience to keep this conference realignment train rolling. \r\nCo… [+7947 chars]"
    // },
    // {
    //   "source": {
    //     "id": "reuters",
    //     "name": "Reuters"
    //   },
    //   "author": "Reuters",
    //   "title": "Sinead O'Connor was found unresponsive at London address, UK police say - Reuters",
    //   "description": "Irish singer Sinead O'Connor, who <a href=\"/world/europe/singer-sinead-oconnor-dies-aged-56-irish-times-2023-07-26/\">died on Wednesday</a> aged 56, was found unresponsive at an address in London and pronounced dead at the scene, London's Metropolitan Police s…",
    //   "url": "https://www.reuters.com/world/europe/sinead-oconnor-was-found-unresponsive-london-address-uk-police-2023-07-27/",
    //   "urlToImage": "https://www.reuters.com/resizer/Qp4mb7WyLo3DElfbdItw5K5xfME=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3RZGW6KZWVJ5NNTVUSTU5FZ2DQ.jpg",
    //   "publishedAt": "2023-07-28T04:33:00Z",
    //   "content": "LONDON, July 27 (Reuters) - Irish singer Sinead O'Connor, who died on Wednesday aged 56, was found unresponsive at an address in London and pronounced dead at the scene, London's Metropolitan Police … [+1288 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Cointelegraph"
    //   },
    //   "author": "Martin Young",
    //   "title": "AI researchers say they've found a way to jailbreak Bard and ChatGPT - Cointelegraph",
    //   "description": "Carnegie Mellon University and AI center researchers have discovered vulnerabilities in AI chatbots that could be exploited to generate harmful and dangerous content.",
    //   "url": "https://cointelegraph.com/news/researchers-claim-method-to-jailbreak-ai-chatbots-llm-chatgpt-bard",
    //   "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDcvMTY0YmI0ZmEtMmU3Ni00Y2NlLTgzZWMtYmQxYjMxOWNjMjg5LmpwZw==.jpg",
    //   "publishedAt": "2023-07-28T04:28:57Z",
    //   "content": "United States-based researchers have claimed to have found a way to consistently circumvent safety measures from artificial intelligence chatbots such as ChatGPT and Bard to generate harmful content.… [+2286 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Hollywood Reporter"
    //   },
    //   "author": "Rick Porter",
    //   "title": "Emmy Awards Postponed Amid Actor and Writer Strikes - Hollywood Reporter",
    //   "description": "The Television Academy and Fox are pushing back the date of the ceremony as the two guilds continue standoffs with the studios.",
    //   "url": "https://www.hollywoodreporter.com/tv/tv-news/2023-emmy-awards-postponed-1235533602/",
    //   "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/2023_07-EmmyNoms_template-on-White-H-2023.jpg?w=1024",
    //   "publishedAt": "2023-07-28T04:22:35Z",
    //   "content": "The 2023 Emmy Awards are officially moving off their usual September airdate as actors and writers continue their strikes against media conglomerates.\r\nThe 75th annual awards had been scheduled to ai… [+1354 chars]"
    // },
    // {
    //   "source": {
    //     "id": "associated-press",
    //     "name": "Associated Press"
    //   },
    //   "author": "EILEEN NG",
    //   "title": "Singapore hangs first woman in 19 years after she was convicted of trafficking 31 grams of heroin - The Associated Press",
    //   "description": "Singapore has conducted its first execution of a woman in 19 years and its second hanging this week for drug trafficking. Activists say another execution is set next week, despite calls for the city-state to cease capital punishment for drug-related crimes. T…",
    //   "url": "https://apnews.com/article/singapore-woman-executed-drug-trafficking-d73c6cff32d6f8065cc0b7e6dd098e00",
    //   "urlToImage": "https://dims.apnews.com/dims4/default/45d2e24/2147483647/strip/true/crop/5597x3148+0+291/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5d%2F53%2F75b931d6deef1cef0a44c9548472%2F57cebbae6e0b49c89730dce1f337634a",
    //   "publishedAt": "2023-07-28T04:07:00Z",
    //   "content": "KUALA LUMPUR, Malaysia (AP) Singapore conducted its first execution of a woman in 19 years on Friday and its second hanging this week for drug trafficking despite calls for the city-state to cease ca… [+3151 chars]"
    // },
    // {
    //   "source": {
    //     "id": "the-hill",
    //     "name": "The Hill"
    //   },
    //   "author": "Tara Suter",
    //   "title": "Tim Scott hits DeSantis on new Florida curriculum: ‘No silver lining in slavery’ - The Hill",
    //   "description": "Republican presidential candidate and Sen. Tim Scott (R-S.C.) criticized and Florida Gov. Ron Desantis (R) for his state’s new standards on the teaching of Black history.  Scott rebuked the new curriculum guidelines, including language that Florida students b…",
    //   "url": "https://thehill.com/homenews/campaign/4124347-tim-scott-hits-desantis-on-new-florida-curriculum/",
    //   "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/07/AP23209023956823-e1690514086103.jpg?w=1280",
    //   "publishedAt": "2023-07-28T03:22:00Z",
    //   "content": "Skip to content\r\nRepublican presidential candidate and Sen. Tim Scott (R-S.C.) criticized and Florida Gov. Ron Desantis (R) for his state’s new standards on the teaching of Black history. \r\nScott reb… [+1875 chars]"
    // },
    // {
    //   "source": {
    //     "id": "nbc-news",
    //     "name": "NBC News"
    //   },
    //   "author": "Frank Thorp V, Kate Santaliz, Scott Wong, Sahil Kapur",
    //   "title": "GOP senators express anxieties about Mitch McConnell's health — and what comes next - NBC News",
    //   "description": "Some Republican senators harbor concerns about Senate Minority Leader Mitch McConnell’s health, saying they have personally witnessed changes.",
    //   "url": "https://www.nbcnews.com/politics/congress/gop-senators-express-anxieties-mitch-mcconnells-health-rcna96706",
    //   "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230727-mitch-McConnell-ac-800p-545aa9.jpg",
    //   "publishedAt": "2023-07-28T01:31:00Z",
    //   "content": "WASHINGTON Some Republican senators harbor concerns about Mitch McConnells health, saying they have personally witnessed changes in the minority leader, 81, after he fell and sustained a concussion i… [+6372 chars]"
    // },
    // {
    //   "source": {
    //     "id": "espn",
    //     "name": "ESPN"
    //   },
    //   "author": "Mike Coppinger, Ben Baby",
    //   "title": "Errol Spence Jr. vs. Terence Crawford debate: The biggest questions about the biggest fight of the year - ESPN - ESPN",
    //   "description": "Is Spence too big for Crawford? Is the winner the pound-for-pound king? Did the fight wait too long to happen? Mike Coppinger and Ben Baby debate the megafight.",
    //   "url": "https://www.espn.com/boxing/story/_/id/38011045/errol-spence-jr-vs-terence-crawford-debate-biggest-questions-biggest-fight-year",
    //   "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0714%2Fr1197844_1296x729_16%2D9.jpg",
    //   "publishedAt": "2023-07-28T01:14:00Z",
    //   "content": "Jul 27, 2023, 09:14 PM ET\r\nIt's actually going to happen. Errol Spence Jr. and Terence Crawford will fight Saturday for the undisputed welterweight title -- and potentially be named best pound-for-po… [+9066 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "MMA Fighting"
    //   },
    //   "author": "Alexander K. Lee",
    //   "title": "Dustin Poirier, Justin Gaethje tout UFC 291 as ‘legacy fight,’ address BMF belt vs. interim title comparison - MMA Fighting",
    //   "description": "Dustin Poirier and Justin Gaethje agree that their second fight at UFC 291 will leave a lasting mark on their careers.",
    //   "url": "https://www.mmafighting.com/2023/7/27/23810740/dustin-poirier-justin-gaethje-tout-ufc-291-rematch-legacy-fight-bmf-belt-interim-title-comparison",
    //   "urlToImage": "https://cdn.vox-cdn.com/thumbor/SylbZ_vCown1XWuvyFjg4_Rzn-g=/0x0:4341x2273/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24815070/1575109903.jpg",
    //   "publishedAt": "2023-07-28T01:00:00Z",
    //   "content": "Dustin Poirier and Justin Gaethje believe theres more on the line than a belt this Saturday.\r\nThe lightweight fan-favorites headline UFC 291 at Delta Center in Salt Lake City, meeting in a rematch of… [+3653 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Well+Good"
    //   },
    //   "author": "Rachel Kraus",
    //   "title": "What To Know About the Postpartum Depression Pill - Well+Good",
    //   "description": "A new study on the efficacy of a drug, Zuranolone, to treat postpartum depression, shows promising results.",
    //   "url": "https://www.wellandgood.com/postpartum-depression-pill/",
    //   "urlToImage": "https://www.wellandgood.com/wp-content/uploads/2023/07/postpartum-depression-pill.jpg",
    //   "publishedAt": "2023-07-28T00:02:09Z",
    //   "content": null
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "CNBC"
    //   },
    //   "author": "Lim Hui Jie",
    //   "title": "Asia markets set to fall ahead of Bank of Japan rate decision - CNBC",
    //   "description": "The Bank of Japan is poised to hold its rates at -0.1%, but investors will look for any shift in stance in its yield curve control policy.",
    //   "url": "https://www.cnbc.com/2023/07/28/asia-markets.html",
    //   "urlToImage": "https://image.cnbcfm.com/api/v1/image/107257988-1686881472462-gettyimages-1257870566-AFP_33G69RV.jpeg?v=1690501449&w=1920&h=1080",
    //   "publishedAt": "2023-07-27T23:44:00Z",
    //   "content": "South Korea's total industrial output climbed 0.1% on a month on month basis in June, a sharp decline from the 1.3% growth seen in May. \r\nOutput from mining and manufacturing industries went down com… [+354 chars]"
    // },
    // {
    //   "source": {
    //     "id": null,
    //     "name": "Android Police"
    //   },
    //   "author": "Jules Wang",
    //   "title": "Galaxy Z Fold 5? More like Galaxy Z Flub 5, says the Android Police podcast - Android Police",
    //   "description": "Hope you're ready for some late-pod moisture...",
    //   "url": "https://www.androidpolice.com/galaxy-z-fold-5-flub-5-android-police-podcast/",
    //   "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/07/samsung-galaxy-z-fold-5-hands-on-07.jpg",
    //   "publishedAt": "2023-07-27T23:30:00Z",
    //   "content": "It's a flub. A flop. Samsung's pocket flaps are showing and the numbers are not good. At least that's what we're making of this week's Unpacked event. Daniel, Ara, and Will are putting in their say o… [+582 chars]"
    // },
    // {
    //   "source": {
    //     "id": "reuters",
    //     "name": "Reuters"
    //   },
    //   "author": "Boureima Balima, Moussa Aksar",
    //   "title": "Niger coup widely condemned, countries urge return to order - Reuters",
    //   "description": "Niger President Mohamed Bazoum remained held in the presidential palace on Thursday afternoon and it was unclear who was in charge of the country after soldiers on Wednesday evening declared a military coup that sparked widespread condemnation.",
    //   "url": "https://www.reuters.com/world/africa/niger-president-says-democracy-will-be-saved-following-coup-2023-07-27/",
    //   "urlToImage": "https://www.reuters.com/resizer/nqfMUSCAdwRGal7IyEiEdryKt3Q=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YUGACL34WRLG7BEF4BW5XI5BGE.jpg",
    //   "publishedAt": "2023-07-27T23:19:15Z",
    //   "content": "NIAMEY, July 27 (Reuters) - Niger President Mohamed Bazoum remained held in the presidential palace on Thursday afternoon and it was unclear who was in charge of the country after soldiers on Wednesd… [+5638 chars]"
    // }

  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fbd36fdf5d2c4e5f82e4bf94ae19cd64&page=1&pageSize=20";
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading: false
       })

  }


  handlePrevClick = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fbd36fdf5d2c4e5f82e4bf94ae19cd64&page=${this.state.page - 1}&pageSize=20`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
  

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false 
    })
  }

  handleNextClick = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fbd36fdf5d2c4e5f82e4bf94ae19cd64&page=${this.state.page + 1}&pageSize=20`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false 
    })
  }

 

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'><b>NewsMania</b>-Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row mt-5">
          {!this.state.loading &&this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}
          
        </div>
        
        <br/>
        <div class="d-grid gap-5 d-md-flex justify-content-md-end">
          <button disabled={this.state.page <= 1} class="btn btn-primary me-md-2" type="button" onClick={this.handlePrevClick}> &larr; Pervious</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} class="btn btn-primary" type="button" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News
