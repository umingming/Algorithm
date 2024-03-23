/*
    트리 구조
    
    1. sellerConfigs 배열 정의, enroll과 referral 통합
    2. profitConfig 객체 정의; enroll을 key로
    3. Seller class 정의
        > 인수로 부모와, name을 받음.
        > name은 key가 되고
        > sellers는 name과 refferral이 같은 enroll의 Seller 인스턴스 배열
        > sell 메소드 정의; 갯수 * 100에서 0.9를 내 수익에 더하고 0.1은 부모를 호출해 상납함.
        > getProfit; 금액을 인자로 0.9만큼을 내 수익에 더하고 부모에게 상납함.
    4. sellerTree 변수 선언 후 Seller 인스턴스를 "-"로 생성
    5. seller, ammout for 반복
        > sellerTree 중 seller를 찾아 sell메소드 호출
    6. enroll기준으로 profitConfig 값 찾아서 결과 발표
*/
function solution(enroll, referrals, sellers, amount) {
    class Seller {
        constructor(name) {
            this.name = name;
            this.profit = 0;
            this.referral = null;
        }
        sell(amount) {
            this.getProfit(amount * 100);
        }
        getProfit(profit) {
            if (profit > 0) {
                this.profit += Math.ceil(profit * 0.9);
                this.referral?.getProfit(Math.floor(profit * 0.1));
            }
        }
    }
    
    const sellerConfigs = enroll.map(name => new Seller(name));
    
    for (let i = 0; i < enroll.length; i++) {
        const referral = sellerConfigs.find(seller => seller.name === referrals[i]);
        if (referral) {
            sellerConfigs[i].referral = referral;
        }
    }
    
    for (let i = 0; i < sellers.length; i++) {
        const seller = sellerConfigs.find(seller => seller.name === sellers[i]);
        if (seller) {
            seller.sell(amount[i]);
        }
    }
    
    return sellerConfigs.map(seller => seller.profit ?? 0);
}