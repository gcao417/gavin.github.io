import React, { useState, useEffect } from "react";
import "./blackjack.css";
import { IoIosArrowBack } from "react-icons/io";

const getCard = (exsitingCards, numOutput) => {
  const cardList = [
    "1c",
    "1d",
    "1h",
    "1s",
    "2c",
    "2d",
    "2h",
    "2s",
    "3c",
    "3d",
    "3h",
    "3s",
    "4c",
    "4d",
    "4h",
    "4s",
    "5c",
    "5d",
    "5h",
    "5s",
    "6c",
    "6d",
    "6h",
    "6s",
    "7c",
    "7d",
    "7h",
    "7s",
    "8c",
    "8d",
    "8h",
    "8s",
    "9c",
    "9d",
    "9h",
    "9s",
    "10c",
    "10d",
    "10h",
    "10s",
    "11c",
    "11d",
    "11h",
    "11s",
    "12c",
    "12d",
    "12h",
    "12s",
    "13c",
    "13d",
    "13h",
    "13s",
  ];

  const output = [];

  for (let i = 0; i < numOutput; i++) {
    const filteredCardList = cardList.filter(
      (val) => !exsitingCards.includes(val) && !output.includes(val)
    );

    const index = Math.floor(
      Math.random() * (52 - exsitingCards.length - output.length)
    );

    output.push(filteredCardList[index]);
  }

  console.log(output);

  return output;
};

const getTotal = (input) => {
  const inputValues = input
    .map((item) =>
      +item.substring(0, item.length - 1) > 10
        ? 10
        : +item.substring(0, item.length - 1)
    )
    .sort((a, b) => b - a);

  return inputValues.reduce(
    (accumulator, value) =>
      value === 1 && accumulator + 11 <= 21
        ? accumulator + 11
        : accumulator + value,
    0
  );
};

function BlackJack() {
  const [money, setMoney] = useState(200);
  const [moneyBet, setMoneyBet] = useState(0);

  const [gameStart, setGameStart] = useState(false);

  const [dealerStart, setDealerStart] = useState(false);

  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const cardsUsed = dealerCards.concat(playerCards);

  const dealerBusted = getTotal(dealerCards) > 21;

  const playerBusted = getTotal(playerCards) > 21;
  const playerFull = playerCards.length >= 5;

  // =====================================================================================

  const getStartingCards = () => {
    const dealer = getCard([], 4);
    const player = dealer.splice(0, dealer.length / 2);
    setDealerCards(dealer);
    setPlayerCards(player);
  };

  const reset = () => {
    setMoney(200);
    setMoneyBet(0);
    setDealerStart(false);
    getStartingCards();
    [5, 10, 50, 100, 500, 1000].map((item) =>
      200 < item
        ? (document.getElementById(item).disabled = true)
        : (document.getElementById(item).disabled = false)
    );
  };

  // =====================================================================================

  useEffect(() => {
    if (!gameStart) {
      setMoneyBet(0);
      setDealerStart(false);
      getStartingCards();
    }
  }, [gameStart]);

  useEffect(() => {
    if (!gameStart) {
      [5, 10, 50, 100, 500, 1000].map((item) =>
        money < item
          ? (document.getElementById(item).disabled = true)
          : (document.getElementById(item).disabled = false)
      );
    }
  }, [moneyBet, gameStart]);

  useEffect(() => {
    if (dealerStart) {
      const temp = dealerCards;
      while (getTotal(temp) < 17 && temp.length < 4) {
        temp.push(...getCard(cardsUsed, 1));
      }
      setDealerCards([...temp]);
    }
  }, [dealerStart]);

  useEffect(() => {
    if (playerBusted || playerFull || dealerStart) {
      if (!playerBusted) {
        if (
          playerFull ||
          dealerBusted ||
          getTotal(playerCards) > getTotal(dealerCards)
        ) {
          setMoney(money + moneyBet * 2);
          setMoneyBet(0);
        } else {
          if (getTotal(playerCards) === getTotal(dealerCards)) {
            setMoney(money + moneyBet);
            setMoneyBet(0);
          }
        }
      }
    }
  }, [
    playerBusted,
    playerFull,
    dealerStart,
    dealerBusted,
    playerCards,
    dealerCards,
  ]);

  // =====================================================================================

  return (
    <div className="Background">
      <div className="BackButton">
        <a href="/" style={{ color: "white" }}>
          <IoIosArrowBack />
        </a>
      </div>

      {gameStart ? (
        <div className="Board">
          {/* Dealer */}
          <div className="Group">
            <div>Dealer</div>

            <div className="CardContainer">
              {dealerCards.map((item, i) => (
                <div className="ImageContainer">
                  <img
                    src={require(`../../Assets/Cards/${
                      i === 0 && !dealerStart ? "back" : item
                    }.png`)}
                    alt={item}
                  />
                </div>
              ))}
            </div>

            {dealerBusted ? <div>BUSTED</div> : null}
          </div>

          {/* Result */}
          <div className="Result">
            {playerBusted || playerFull || dealerStart
              ? playerBusted
                ? "You LOSE"
                : playerFull ||
                  dealerBusted ||
                  getTotal(playerCards) > getTotal(dealerCards)
                ? "You WIN"
                : getTotal(playerCards) === getTotal(dealerCards)
                ? "TIE"
                : "You LOSE"
              : getTotal(playerCards)}
          </div>

          {/* Player */}
          <div className="Group">
            <div>Player</div>
            <div className="CardContainer">
              {playerCards.map((item) => (
                <div className="ImageContainer">
                  <img
                    src={require(`../../Assets/Cards/${item}.png`)}
                    alt={item}
                  />
                </div>
              ))}
            </div>

            {playerBusted ? <div>BUSTED</div> : null}

            <div>
              {playerBusted || playerFull || dealerStart ? (
                <button onClick={() => setGameStart(false)}>Bet Again</button>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setPlayerCards([...playerCards, ...getCard(cardsUsed, 1)])
                    }
                  >
                    Hit
                  </button>
                  <button onClick={() => setDealerStart(true)}>stand</button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="BetBoard">
          <div className="BetOptions">
            {[5, 10, 50, 100, 500, 1000].map((item) => (
              <button
                id={item}
                onClick={() => {
                  setMoney(money - item);
                  setMoneyBet(moneyBet + item);
                }}
              >
                +{item}
              </button>
            ))}
          </div>

          <div>
            {/* Bet Amount */}
            <div className="MoneyBet">Money on the table: ${moneyBet}</div>

            {/* BetOptions */}
            {moneyBet ? (
              <div className="BetConfirmation">
                <button
                  onClick={() => {
                    setMoney(money + moneyBet);
                    setMoneyBet(0);
                  }}
                >
                  I want my money back please🥺
                </button>
                <button onClick={() => setGameStart(true)}>START</button>
              </div>
            ) : (
              <div className="BetConfirmation">
                <button
                  disabled
                  onClick={() => {
                    setMoney(money + moneyBet);
                    setMoneyBet(0);
                  }}
                >
                  I want my money back please🥺
                </button>
                <button disabled onClick={() => setGameStart(true)}>
                  START
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Money */}
      <div className="Group">${money}</div>

      {/* Gameover */}
      {money || moneyBet ? null : (
        <div className="Gameover">
          <div>BROKE</div>
          <button onClick={() => reset()}>Reset Game</button>
        </div>
      )}
    </div>
  );
}

// TODO:
// ~ Card dealing/fliping animation
// https://github.com/R4M5E5/react-flippable-card-video-tutorial-code

export default BlackJack;
