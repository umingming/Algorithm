package step02.no2884;

import java.util.Scanner;

public class Main01 {

	public static void main(String[] args) {
//		설계>
//		1. Scanner 사용
//		2. H, M int로 입력 받기
//		3. if문
//			> 45분 이르게 시계를 수정
//				> M>=45: M - 45
//				> M<45 : M + 60 - 45, H - 1
//				> H=0 : M>=45은 위와 같고, M<45는 H=23
		
		Scanner scan = new Scanner(System.in);
		int h = scan.nextInt();
		int m = scan.nextInt();
		
		if(m >= 45) {
			m -= 45;
		} else {
			if(h == 0) {
				m = m + 60 - 45;
				h = 23;
			} else {
				m = m + 60 - 45;
				h -= 1;
			}
		}
		System.out.println(h + " " + m);
	}

}
