import 'package:flutter/material.dart';

class Produtos extends StatefulWidget {
  const Produtos({super.key});

  @override
  State<Produtos> createState() => _ProdutosState();
}

class _ProdutosState extends State<Produtos> {
  String nome = '';
  double preco = 0.0;
  int quantidade = 0;
  double subtotal = 0.0;

  void calcular() {
    subtotal = preco * quantidade;
  }

  void mostrarProduto() {
    if (mounted) {
      showDialog(
        context: context,
        builder: (BuildContext context) => AlertDialog(
          title: Text(nome),
          content: Text(
            "Preço: $preco, Quantidade: $quantidade\nSubtotal: $subtotal",
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.jpg"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Color.fromRGBO(0, 0, 0, 0.2),
              BlendMode.dstATop,
            ),
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 30.0,
          children: [
            Text("Produtos"),
            TextField(decoration: InputDecoration(labelText: "Nome")),
            TextField(decoration: InputDecoration(labelText: "Preço")),
            TextField(decoration: InputDecoration(labelText: "Quantidade")),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(onPressed: () {}, child: Text("Subtotal")),
                ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text("Sair"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}