package step03.no8393;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
//		설계>
//		1. Scanner 사용
//		2. int로 입력 받기
//		3. int 변수 i 생성
//		4. for문
//			>i를 1부터 n까지 합으로 만듦.
//		5. i 출력
		
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int sum = 0;
		
		for(int i=1; i<=n; i++) {
			sum+=i;
		}
		System.out.println(sum);

	}

}
