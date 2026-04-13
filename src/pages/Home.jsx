import CoinCard from "../components/CoinCard"
import useFetch from "../hooks/useFetch"


function Home(){
    const {data, loading, error} = useFetch(
       '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )

    if (loading) return <h1 className="loader">Carregando moedas...</h1>
    if (error) return <h1 className="error">Erro ao buscar dados da API</h1>

    return(
        <main className="container">
            <h1 className="title">Mercado de Cripto</h1>
            <div className="coin-grid">
                {data && data.map(coin =>(
                  <CoinCard key={coin.id} coin={coin} />
                ))}
            </div>
        </main>
    )
}

export default Home