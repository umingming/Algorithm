import java.util.Scanner;
public class No14681 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		int y = sc.nextInt();
		sc.close();
		
		//1사분면, x>0, y>0
		//2사분면, x<0, y>0
		//3사분면, x<0, y<0
		//4사분면, x>0. y<0
		
		System.out.println((x>0&&y>0)?"Quadrant 1":(x<0&&y>0)?"Quadrant 2":(x<0&&y<0)?"Quadrant 3":(x>0&&y<0)?"Quadrant 4":"");
		

	}

}
