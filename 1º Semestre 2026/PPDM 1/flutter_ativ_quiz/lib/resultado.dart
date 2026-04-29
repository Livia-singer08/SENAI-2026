import 'package:flutter/material.dart';

class ResultadoScreen extends StatelessWidget {
  final String nome;
  final int pontos;
  final int total;

  const ResultadoScreen({
    super.key,
    required this.nome,
    required this.pontos,
    required this.total,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Parabéns, $nome!", style: const TextStyle(fontSize: 24)),
            const SizedBox(height: 20),
            const Text("Seu resultado:", style: TextStyle(fontSize: 20)),
            Text("$pontos / $total", style: const TextStyle(fontSize: 32)),
          ],
        ),
      ),
    );
  }
}