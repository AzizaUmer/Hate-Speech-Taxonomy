// Full JSON data embedded
const data = {
  "name": "Hate Speech Platform Policies",
  "children": [
    {
      "name": "Conceptual",
      "children": [
        {
          "name": "Definition & Scope",
          "children": [
            { "name": "Legalistic Definitions", "children": [{ "name": "Facebook, TikTok, X/Twitter" }] },
            { "name": "Operational Definitions", "children": [{ "name": "Reddit, Bluesky" }] },
            { "name": "Minimalist Definitions", "children": [{ "name": "Gab, Telegram" }] }
          ]
        },
        {
          "name": "Protected Attributes",
          "children": [
            { "name": "Core Traits", "children": [{ "name": "All platforms" }] },
            { "name": "Extended Traits", "children": [{ "name": "TikTok, Bluesky, X/Twitter" }] }
          ]
        },
        {
          "name": "Severity Structure",
          "children": [
            { "name": "Tiered", "children": [{ "name": "Facebook" }] },
            { "name": "Flats", "children": [{ "name": "Reddit, Telegram" }] }
          ]
        }
      ]
    },
    {
      "name": "Normative Expression vs. Protection",
      "children": [
        {
          "name": "Balancing Principle",
          "children": [
            { "name": "Safety-Oriented", "children": [{ "name": "Facebook, TikTok" }] },
            { "name": "Contextual Balance", "children": [{ "name": "Reddit, Bluesky, X" }] },
            { "name": "Expression-Oriented", "children": [{ "name": "Gab, Telegram" }] }
          ]
        },
        {
          "name": "Context Sensitivity",
          "children": [
            { "name": "High", "children": [{ "name": "Facebook, Reddit" }] },
            { "name": "Low", "children": [{ "name": "Gab, Telegram" }] }
          ]
        }
      ]
    },
    {
      "name": "Governance",
      "children": [
        {
          "name": "Moderation Architecture",
          "children": [
            { "name": "Hybrid (AI + Human)", "children": [{ "name": "Facebook, TikTok, Reddit" }] },
            { "name": "Human-Centric", "children": [{ "name": "Gab, Telegram" }] },
            { "name": "User-Customizable", "children": [{ "name": "Bluesky" }] }
          ]
        },
        {
          "name": "Enforcement Actions",
          "children": [
            { "name": "Graduated Sanctions", "children": [{ "name": "Twitter/X, TikTok" }] },
            { "name": "Community Enforcement", "children": [{ "name": "Reddit" }] },
            { "name": "Centralized Removal", "children": [{ "name": "Telegram" }] }
          ]
        }
      ]
    },
    {
      "name": "Behavioral Proactivity & Counterspeech",
      "children": [
        { "name": "Proactive", "children": [{ "name": "TikTok, Facebook" }] },
        { "name": "Reactive", "children": [{ "name": "Reddit, Gab" }] },
        { "name": "User Empowerment", "children": [{ "name": "Bluesky, TikTok" }] }
      ]
    },
    {
      "name": "Transparency Accountability & Data Access",
      "children": [
        { "name": "High Transparency", "children": [{ "name": "Meta, TikTok" }] },
        { "name": "Moderate Transparency", "children": [{ "name": "Reddit, X" }] },
        { "name": "Low Transparency", "children": [{ "name": "Gab, Telegram" }] }
      ]
    }
  ]
};


// D3 tree setup
const svg = d3.select("#tree");
const width = svg.node().getBoundingClientRect().width;
const height = svg.node().getBoundingClientRect().height;
const g = svg.append("g").attr("transform","translate(50,50)");
const treeLayout = d3.tree().size([height-100, width-200]);

let root, selectedNode, nodeId = 0, radial = false;
const tooltip = d3.select("body").append("div").attr("class","tooltip").style("opacity",0);

// Initialize tree
function initTree(){
  root = d3.hierarchy(data);
  root.x0 = height/2;
  root.y0 = 0;
  selectedNode = root;
  if(root.children) root.children.forEach(collapse);
  update(root);
}

// Collapse helper
function collapse(d){ if(d.children){ d._children=d.children; d._children.forEach(collapse); d.children=null; } }
function expandAll(d){ if(d._children){d.children=d._children; d._children=null;} if(d.children)d.children.forEach(expandAll);}
function collapseAll(d){ if(d.children){d._children=d.children; d.children=null;} if(d._children)d._children.forEach(collapseAll); }

function update(source){
  const treeData = treeLayout(root);
  const nodes = treeData.descendants();
  const links = treeData.links();
  nodes.forEach(d=>{ if(radial){ let r=d.y,a=d.x; d.x=r*Math.sin(a); d.y=r*Math.cos(a); } else d.y=d.depth*180; });

  // Nodes
  const node = g.selectAll("g.node").data(nodes,d=>d.id|| (d.id=++nodeId));
  const nodeEnter = node.enter().append("g")
    .attr("class","node")
    .attr("transform",`translate(${source.y0},${source.x0})`)
    .on("click",(event,d)=>{ selectedNode=d; loadPanel(d); })
    .on("mouseover",(event,d)=>{ tooltip.transition().duration(150).style("opacity",0.9); tooltip.html(`<strong>${d.data.name}</strong><br>${d.data.definition||'No details.'}`); })
    .on("mousemove", event=>tooltip.style("left",(event.pageX+10)+"px").style("top",(event.pageY+10)+"px"))
    .on("mouseout",()=>tooltip.transition().duration(200).style("opacity",0));

  nodeEnter.append("circle").attr("r",1e-6).style("fill", d=>d._children?"#ffb74d":"#4f6ef7");
  nodeEnter.append("text").attr("dy",4).attr("x",d=>d.children||d._children?-12:12).attr("text-anchor",d=>d.children||d._children?"end":"start").text(d=>d.data.name);

  const nodeUpdate = nodeEnter.merge(node);
  nodeUpdate.transition().duration(350).attr("transform",d=>`translate(${d.y},${d.x})`);
  nodeUpdate.select("circle").attr("r",7).style("fill",d=>d._children?"#ffb74d":"#4f6ef7");
  node.exit().transition().duration(350).attr("transform",`translate(${source.y},${source.x})`).remove();

  // Links
  const link = g.selectAll("path.link").data(links,d=>d.target.id);
  const linkEnter = link.enter().insert("path","g").attr("class","link").attr("d",d=>{ const o={x:source.x0,y:source.y0}; return diagonal(o,o); });
  linkEnter.merge(link).transition().duration(350).attr("d",d=>diagonal(d.source,d.target));
  link.exit().transition().duration(350).attr("d",d=>{ const o={x:source.x,y:source.y}; return diagonal(o,o); }).remove();

  nodes.forEach(d=>{ d.x0=d.x; d.y0=d.y; });
}

function diagonal(s,d){ return `M ${s.y} ${s.x} C ${(s.y+d.y)/2} ${s.x}, ${(s.y+d.y)/2} ${d.x}, ${d.y} ${d.x}`; }

function loadPanel(d){
  selectedNode=d;
  document.getElementById('panelTitle').textContent=d.data.name;
  document.getElementById('panelMeta').textContent=`Depth: ${d.depth} • Children: ${(d.children||d._children||[]).length}`;
  document.getElementById('panelDef').value=d.data.definition||'';
  document.getElementById('newNodeName').value=d.data.name;
  document.getElementById('newNodeDesc').value=d.data.definition||'';
}

// Buttons
document.getElementById("expandAllBtn").addEventListener("click", ()=>{ expandAll(root); update(root); });
document.getElementById("collapseAllBtn").addEventListener("click", ()=>{ collapseAll(root); update(root); });
document.getElementById("toggleLayoutBtn").addEventListener("click", ()=>{ radial=!radial; update(root); });
document.getElementById("refreshBtn").addEventListener("click", ()=>{ g.selectAll("*").remove(); initTree(); });

// Add Node
document.getElementById("addNodeBtn").addEventListener("click", ()=>{
  const name = document.getElementById("newNodeName").value.trim();
  const desc = document.getElementById("newNodeDesc").value.trim();
  if(!selectedNode||!name) return;
  if(!selectedNode.data.children&&!selectedNode.data._children) selectedNode.data.children=[];
  if(selectedNode.data._children){ selectedNode.data.children=selectedNode.data._children; selectedNode.data._children=null;}
  selectedNode.data.children.push({name, definition: desc||'No description'});
  root = d3.hierarchy(data);
  update(root);
});

// Update Node
document.getElementById("updateNodeBtn").addEventListener("click", ()=>{
  if(!selectedNode) return;
  const name = document.getElementById("newNodeName").value.trim();
  const desc = document.getElementById("newNodeDesc").value.trim();
  selectedNode.data.name = name || selectedNode.data.name;
  selectedNode.data.definition = desc || selectedNode.data.definition;
  loadPanel(selectedNode);
  update(selectedNode);
});

// Delete Node with confirmation
document.getElementById("deleteNodeBtn").addEventListener("click", ()=>{
  if(!selectedNode || selectedNode === root) return;
  if(confirm(`Are you sure you want to delete "${selectedNode.data.name}"?`)){
    const parent = selectedNode.parent;
    const siblings = parent.data.children || parent.data._children;
    const idx = siblings.findIndex(n=>n.name===selectedNode.data.name);
    if(idx>=0) siblings.splice(idx,1);
    root = d3.hierarchy(data);
    update(root);
  }
});

// Export JSON
document.getElementById("exportJsonBtn").addEventListener("click", ()=>{
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));
  a.download = "taxonomy.json";
  a.click();
});

// Import JSON
document.getElementById("importJsonInput").addEventListener("change", event=>{
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const imported = JSON.parse(e.target.result);
      g.selectAll("*").remove();
      data.children = imported.children || [];
      initTree();
    }catch(err){ alert("Invalid JSON"); }
  };
  reader.readAsText(file);
});

// Export PNG
document.getElementById("exportPngBtn").addEventListener("click", () => {
  const svgNode = svg.node();
  const bbox = svgNode.getBBox(); // full content bounds
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgNode);

  const canvas = document.createElement("canvas");
  canvas.width = bbox.width + 100;  // add padding
  canvas.height = bbox.height + 100;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  img.onload = function () {
    ctx.fillStyle = "#ffffff"; // optional white background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // translate to ensure tree fits in canvas
    ctx.drawImage(img, -bbox.x + 50, -bbox.y + 50);
    URL.revokeObjectURL(url);

    const pngLink = document.createElement("a");
    pngLink.download = "taxonomy.png";
    pngLink.href = canvas.toDataURL("image/png");
    pngLink.click();
  };
  img.src = url;
});

initTree();