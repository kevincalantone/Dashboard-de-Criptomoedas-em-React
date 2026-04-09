Monitor de Criptomoedas

Um dashboard moderno construído com **React** para acompanhamento de preços e variações do mercado de criptoativos em tempo real, utilizando a API pública do CoinGecko.

## 🚀 Funcionalidades

- **Listagem de Moedas:** Visualização das principais criptomoedas com preços atualizados.
- **Busca em Tempo Real:** Filtro dinâmico de moedas por nome ou símbolo.
- **Página de Detalhes:** Informações aprofundadas sobre cada ativo (market cap, variação 24h, etc).
- **Favoritos:** Sistema para salvar moedas de interesse (utilizando LocalStorage).
- **Responsivo:** Interface adaptável para dispositivos móveis e desktop.

## 🛠️ Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/) (Navegação)
- [Axios](https://axios-http.com/) (Consumo de API)
- [Lucide React](https://lucide.dev/) (Ícones)
- [CSS Modules / Styled Components] (Estilização)

## 📂 Estrutura do Projeto

```text
src/
 ├── components/  # Componentes reutilizáveis
 ├── pages/       # Telas principais da aplicação
 ├── services/    # Configuração de chamadas à API
 ├── hooks/       # Lógica de estado customizada
 └── utils/       # Formatadores e funções auxiliares