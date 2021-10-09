package com.java.step06.no4673;

public class Main {

	public static void main(String[] args) {
		/*
		���� �ѹ� ���
		-���� ���� n�� ���� n�� �� �ڸ����� ���ϴ� �Լ��� d(n)�̶�� ��
		-n�� d(n)�� ������
		-�����ڰ� ���� ���ڰ� ���� �ѹ�
		-10000���� ũ�� ����.
		
		����>
		1. ���̰� 10000�� boolean �迭 ����
		2. for�� 10000 �ݺ�
			>notSelfNum ���� ���� �� i�� �ʱ�ȭ
			>for�� i�� ���� �ݺ�
				>nsn ������ j��°�� �ش��ϴ� �� �߰���.
			>�迭�� nsn-1��° ��Ҹ� true�� ������.
		3. for�� 10000 �ݺ�
			>if �迭�� ��Ҹ� ���ǽ����� i+1����� 
		 */
		
		boolean[] notSelfNums = new boolean[10000];
		
		for(int i=1; i<=10000; i++) {
			int notSelfNum = i;
			int tmp = i;
			while(tmp != 0){
				notSelfNum += (tmp % 10); 
				tmp = tmp / 10;	
			}
			
			if(notSelfNum - 1 < 10000) {
				notSelfNums[notSelfNum - 1] = true;
			}
		}
		
		for(int i=0; i<10000; i++) {
			if(!notSelfNums[i]) {
				System.out.println(i + 1);
			}
		}
	}
}
