using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess_EF.Migrations
{
    public partial class addTbParkinson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TbParkinson",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Fo = table.Column<double>(type: "float", nullable: false),
                    Fhi = table.Column<double>(type: "float", nullable: false),
                    Flo = table.Column<double>(type: "float", nullable: false),
                    Jitter = table.Column<double>(type: "float", nullable: false),
                    JitterAbs = table.Column<double>(type: "float", nullable: false),
                    RAP = table.Column<double>(type: "float", nullable: false),
                    PPQ = table.Column<double>(type: "float", nullable: false),
                    DDP = table.Column<double>(type: "float", nullable: false),
                    Shimmer = table.Column<double>(type: "float", nullable: false),
                    ShimmerDb = table.Column<double>(type: "float", nullable: false),
                    ShimmerApq3 = table.Column<double>(type: "float", nullable: false),
                    ShimmerApq5 = table.Column<double>(type: "float", nullable: false),
                    Apq = table.Column<double>(type: "float", nullable: false),
                    Dda = table.Column<double>(type: "float", nullable: false),
                    Nhr = table.Column<double>(type: "float", nullable: false),
                    Hnr = table.Column<double>(type: "float", nullable: false),
                    Rpde = table.Column<double>(type: "float", nullable: false),
                    Dfa = table.Column<double>(type: "float", nullable: false),
                    Spread1 = table.Column<double>(type: "float", nullable: false),
                    Spread2 = table.Column<double>(type: "float", nullable: false),
                    D2 = table.Column<double>(type: "float", nullable: false),
                    Ppe = table.Column<double>(type: "float", nullable: false),
                    Status = table.Column<bool>(type: "bit", nullable: false),
                    CreationDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TbParkinson", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TbParkinson_TbPatients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "TbPatients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TbParkinson_PatientId",
                table: "TbParkinson",
                column: "PatientId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TbParkinson");
        }
    }
}
