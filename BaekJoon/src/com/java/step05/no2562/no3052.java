package com.java.step05.no2562;

import java.util.HashSet;
import java.util.Scanner;

public class no3052 {

	public static void main(String[] args) {
		/*
		���� 10���� �Է� �ް� 42�� ���� �������� ���� �ٸ� ���� �� �� �ִ��� ����Ͻÿ�.
		
		����>
		1. Scanner
		2. ���̰� 10�� integer �迭 ����
		3. count���� ����
		4. for�� �迭�� ���� �ݺ�
			>i��° ��ҿ� �Է� ���� ���ڸ� 42�� ���� �� ����
			>�������� �ߺ�Ȯ�� ���� ���� �� false�� �ʱ�ȭ
			>for�� i-1�ݺ�
				>if�� i��°�� j��° ��Ұ� ������?
					>�� ���� true�� ����
			>if�� �ߺ��� �ƴϸ�? count++
		5. ��� ���
		 */
		
		Scanner scan = new Scanner(System.in);
		HashSet<Integer> hs = new HashSet<Integer>();
		
		for(int i=0; i<10; i++) {
			hs.add(scan.nextInt() % 42);
		}
		
		System.out.println(hs.size());
	}

}
